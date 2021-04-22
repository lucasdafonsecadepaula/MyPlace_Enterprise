import Layout from "../src/components/Layout";
import Dashboard from "../src/components/Dashboard";

export default function Home() {
  return (
    <>
      <Layout title="Dashboard" ContentContainer={<Dashboard />} />
    </>
  )
}
