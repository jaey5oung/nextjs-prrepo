import Layout from "components/Layout"
import SubLayout from "components/SubLayout"
import { useState } from "react"
import { useRouter } from "next/router"

export default function MyInfo({ time }) {
  const router = useRouter()
  const [clicked, setClicked] = useState(false)
  const { status = "initial" } = router.query
  return (
    <>
      <h1 className="title">MyInfo</h1>
      <h1 class="title">clicked : {String(clicked)}</h1>
      <h1 class="title">status : {status}</h1>
      <button
        onClick={() => {
          alert("edit")
          setClicked(true)
          location.replace("/settings/my/info?status=editing")
        }}
      >
        edit(replace)
      </button>
      <button
        onClick={() => {
          alert("edit")
          setClicked(true)
          router.push("/settings/my/info?status=editing")
        }}
      >
        edit(push)
      </button>
      <button
        onClick={() => {
          alert("edit")
          setClicked(true)
          router.push("/settings/my/info?status=editing", undefined, {
            shallow: true,
          })
        }}
      >
        edit(shallow)
      </button>
    </>
  )
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
