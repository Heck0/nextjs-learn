import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";
import utilStyles from "../../styles/utils.module.scss";
import { GetStaticProps, GetStaticPaths } from "next";
import { PostDataHtml } from "../../lib/posts";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData: PostDataHtml = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: {
    params: {
      id: string;
    };
  }[] = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;
