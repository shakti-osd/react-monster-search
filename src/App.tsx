import { useState, useEffect } from "react"
import axios from "axios"
import Header from "../src/components/Header"
import SearchBox from "../src/components/SearchBox"
import SortMonster from "../src/components/SortMonster"
import MonsterList from "../src/components/MonsterList"
import Footer from "../src/components/Footer"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

import { SelectChangeEvent } from "@mui/material/Select"

function App() {
  const [monsters, setMonsters] = useState([])

  // Sort Order Monster
  const [order, setOrder] = useState("")
  const handleChangeOrder = (event: SelectChangeEvent) => {
    setOrder(event.target.value as string)
  }

  // End Sort Order Monster

  // Search Monster
  const [search, setSearch] = useState<string>("")

  const handleChange = (e: any) => {
    setSearch(e.target.value)
  }

  const debaunce = function (fn: Function, d: number) {
    let timer: number
    return function () {
      let context = this
      let args = arguments
      console.log("args", args, context)
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, d)
    }
  }

  const searchMonster = debaunce(handleChange, 500)

  // End Search Monster

  useEffect(() => {
    const monsterUserData = axios("https://jsonplaceholder.typicode.com/users")
    monsterUserData.then((response) => {
      setMonsters(response.data)
    })
  }, [])

  const monsterFilter = monsters.filter((item: any) =>
    item?.name?.toLowerCase().includes(search.toLowerCase())
  )
  const monsterSorted = monsterFilter.sort((a: any, b: any) => {
    const nameA = a.name.toUpperCase() // ignore upper and lowercase
    const nameB = b.name.toUpperCase() // ignore upper and lowercase
    if (order === "asc") {
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
    } else {
      if (nameA > nameB) {
        return -1
      }
      if (nameA < nameB) {
        return 1
      }
    }

    // names must be equal
    return 0
  })

  return (
    <>
      <Header />
      <Container sx={{ padding: { xs: "0 16px" } }}>
        <Box
          sx={{
            bgcolor: { xl: "#6b6464", xs: "#c6c6c6" },
            height: "auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SearchBox changeHandler={searchMonster} />
          <SortMonster changeOrder={handleChangeOrder} selectedOrder={order} />
        </Box>
      </Container>
      <MonsterList monsterData={monsterSorted} />
      <Footer />
    </>
  )
}

export default App
