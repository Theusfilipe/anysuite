import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import Link from "next/link";

import { getTranslation } from "./../../../packages/i18n/index";

const lang = "pt";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", gap: "20px" }}>
      <h1>{getTranslation(lang, "welcome")}</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/maintenance">
          <div style={buttonStyle}>
            
            <span>{getTranslation(lang, "maintenance")}</span>
          </div>
        </Link>

        <Link href="/stockroom">
          <div style={buttonStyle}>
            
            <span>{getTranslation(lang, "stockroom")}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

import { CSSProperties } from "react";

const buttonStyle: CSSProperties = {
  width: "150px",
  height: "150px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid #000",
  borderRadius: "10px",
  cursor: "pointer",
  background: "#f8f9fa",
  textAlign: "center",
  fontSize: "16px",
};