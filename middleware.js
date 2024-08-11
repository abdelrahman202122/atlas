import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let headers = { "accept-language": "en,en;q=0.5" };
let languages = new Negotiator({ headers }).languages();
let locales = ["en", "ar"];
let defaultLocale = "en";

function getLocale(request) {
  return "ar";
}

export function middleware(request) {}
