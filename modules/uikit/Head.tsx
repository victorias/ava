import NextHead from 'next/head';
import './reset.css';

interface Props {
  title?: string;
}

const Head = ({ title = 'ava bridal' }: Props) => (
  <NextHead>
    <title>{title}</title>
    <link rel="stylesheet" href="https://use.typekit.net/hlq2sgx.css" />
  </NextHead>
);

export default Head;
