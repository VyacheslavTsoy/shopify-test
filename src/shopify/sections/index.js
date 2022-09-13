import { register, load } from "@shopify/theme-sections";
import Header from "@/shopify/sections/header";
import Products from "@/shopify/sections/products";

register("header", Header);
register("products", Products);

load("*");
