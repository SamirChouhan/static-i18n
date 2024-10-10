import { getTranslations } from "@/i18n";

interface PageProps {
  params: { locale: string };
}

const Page = async ({ params: { locale } }: PageProps) => {
  const t = await getTranslations({ locale });

  return <div>{t("Index.title")}</div>;
};

export default Page;
