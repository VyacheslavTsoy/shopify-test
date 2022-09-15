import { register, load } from "@shopify/theme-sections";
import Header from "@/shopify/sections/header";
import Products from "@/shopify/sections/products";
import Testimonials from "@/shopify/sections/testimonials";

register("header", Header);
register("products", Products);
register("testimonials", Testimonials);

load("*");
