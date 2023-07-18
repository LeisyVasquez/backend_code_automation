import FuseLoading from "@fuse/core/FuseLoading";
import FusePageCarded from "@fuse/core/FusePageCarded";
import { useDeepCompareEffect } from "@fuse/hooks";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import withReducer from "app/store/withReducer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import _ from "@lodash";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useThemeMediaQuery from "@fuse/hooks/useThemeMediaQuery";
import {
  getProduct,
  newProduct,
  resetProduct,
  selectProduct,
} from "../store/productSlice";
import reducer from "../store";
import ProductHeader from "./ProductHeader";
import BasicInfoTab from "./tabs/BasicInfoTab";

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup.string().required("Ingresa un nombre para el proyecto"),
  nameBD: yup
    .string()
    .required("Debes ingresar un nombre de base de datos")
    .matches(
      /^[A-Za-z][A-Za-z0-9_]*[^_]$/,
      "El nombre de la base de datos debe comenzar con una letra, no puede contener dígitos, no puede terminar con guión bajo, no puede tener letras con marca diacrítica o letras latinas, y no puede contener caracteres especiales."
    ),

  userdb: yup
    .string()
    .required("Debes ingresar un nombre de usuario")
    .matches(
      /^[A-Za-z][A-Za-z0-9_]*[^_]$/,
      "El nombre de la base de datos debe comenzar con una letra, no puede contener dígitos, no puede terminar con guión bajo, no puede tener letras con marca diacrítica o letras latinas, y no puede contener caracteres especiales."
    ),
  passwordb: yup
  .string()
  .required("Ingresa una contraseña de base de datos"),
  namerepo: yup
    .string()
    .required("Debes ingresar un nombre de repositorio")
    .matches(
      /^[a-z][a-z0-9]*$/,
      "El nombre del repositorio debe comenzar con una letra minúscula y no puede contener espacios ni caracteres especiales"
    )
    .notOneOf(
      [
        "dependencies",
        "devDependencies",
        "peerDependencies",
        "optionalDependencies",
      ],
      "El nombre del repositorio no puede ser una dependencia del proyecto"
    ),
  urlrepo: yup
    .string()
    .required("Debes ingresar una URL de repositorio")
    .matches(
      /^[a-z0-9\-]+\.git$/,
      "La URL del repositorio debe terminar con .git y solo puede contener letras minúsculas, números y guiones"
    )
    .test(
      "lowercase-only",
      "La URL del repositorio debe contener solo letras minúsculas",
      (value) => {
        return /^[a-z0-9\-\/]+\.git$/.test(value);
      }
    ),
  nameramarepo: yup
    .string()
    .required("Debes ingresar un nombre de rama de repositorio")
    .matches(/^\S*$/, "El nombre de la rama no puede contener espacios"),
  namedoc: yup.string().required("Debes ingresar un nombre de documento"),
  versiondoc: yup.string().required("Debes ingresar una version de documento"),
  versionjson: yup
    .string()
    .nullable()
    .test(
      "semver",
      "Si se ingresa una versión, debe seguir el estándar SEM Server (versionamiento semántico)",
      (value) => {
        if (value) {
          const semverRegex = /^\d+\.\d+\.\d+$/;
          return semverRegex.test(value);
        }
        return true;
      }
    ),
});
function Product(props) {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("lg"));

  const routeParams = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [noProduct, setNoProduct] = useState(false);
  const methods = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = methods;
  const form = watch();

  useDeepCompareEffect(() => {
    function updateProductState() {
      const { productId } = routeParams;

      if (productId === "new") {
        /**
         * Create New Product data
         */
        dispatch(newProduct());
      } else {
        /**
         * Get Product data
         */
        dispatch(getProduct(productId)).then((action) => {
          /**
           * If the requested product is not exist show message
           */
          if (!action.payload) {
            setNoProduct(true);
          }
        });
      }
    }

    updateProductState();
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (!product) {
      return;
    }
    /**
     * Reset the form on product state changes
     */
    reset(product);
  }, [product, reset]);

  useEffect(() => {
    return () => {
      /**
       * Reset Product on component unload
       */
      dispatch(resetProduct());
      setNoProduct(false);
    };
  }, [dispatch]);

  /**
   * Tab Change
   */
  function handleTabChange(event, value) {
    setTabValue(value);
  }

  /**
   * Show Message if the requested products is not exists
   */
  if (noProduct) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There is no such product!
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/apps/e-commerce/products"
          color="inherit"
        >
          Go to Products Page
        </Button>
      </motion.div>
    );
  }

  /**
   * Wait while product data is loading and form is setted
   */
  if (
    _.isEmpty(form) ||
    (product &&
      routeParams.productId !== product.id &&
      routeParams.productId !== "new")
  ) {
    return <FuseLoading />;
  }

  return (
    <FormProvider {...methods}>
      <FusePageCarded
        header={<ProductHeader />}
        content={
          <>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="secondary"
              textColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
              classes={{ root: "w-full h-64 border-b-1" }}
            >
              <Tab className="h-64" label="info" />
            </Tabs>
            <div className="p-16 sm:p-24 max-w-3xl">
              <div className={tabValue !== 0 ? "hidden" : ""}>
                <BasicInfoTab />
              </div>
            </div>
          </>
        }
        scroll={isMobile ? "normal" : "content"}
      />
    </FormProvider>
  );
}

export default withReducer("eCommerceApp", reducer)(Product);
