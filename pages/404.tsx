import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.scss";

export default function Custom404() {
  return (
    <Layout>
      <h1 className={utilStyles.headingXl}>Vous semblez être perdu ! 🙄</h1>
    </Layout>
  );
}
