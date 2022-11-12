import { useRouter } from "next/router";
import React from "react";

type Props = {};

export default function PostDetail({}: Props) {
  const router = useRouter();
  return (
    <>
      <div>PostDetail</div>
      <p>{JSON.stringify(router.query)}</p>
    </>
  );
}
