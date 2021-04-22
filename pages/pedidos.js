import Layout from "../src/components/Layout";
import Pedidos from "../src/components/Pedidos";

export default function pedidosPage() {
  return (
    <>
      <Layout title="Pedidos" ContentContainer={<Pedidos />} />
    </>
  );
}
