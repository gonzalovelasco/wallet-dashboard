"use client";

import { Button, Header } from "ui";
import { useServerStatusQuery } from "../src/store/services/api";

export default function Page(): JSX.Element {
  const { data } = useServerStatusQuery();
  return (
    <>
      <Header text="Web" />
      <h1>{data?.message}</h1>
      <Button />
    </>
  );
}
