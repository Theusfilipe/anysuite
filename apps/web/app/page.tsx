import Image, { type ImageProps } from "next/image";
import  ButtonLabelAndIcon  from "@repo/ui/buttonLabelAndIcon";
import styles from "./page.module.css";
import Link from "next/link";

import { getTranslation } from "../../../packages/i18n/src/getTranslation";

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
    <div className={styles.pageContainer}>
      

      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/maintenance">
          
            <ButtonLabelAndIcon icon="Handyman" text={String(getTranslation(lang, "maintenance"))}/>
              
        </Link>

        <Link href="/stockroom">
          <ButtonLabelAndIcon icon="Inventory" text={String(getTranslation(lang, "stockroom"))}/>
        </Link>

        <Link href="/personel">
          <ButtonLabelAndIcon icon="Group" text={String(getTranslation(lang, "personelControl"))}/>
        </Link>
      </div>
    </div>
  );
}



