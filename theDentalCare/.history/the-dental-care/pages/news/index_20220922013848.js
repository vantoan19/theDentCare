import styled from "styled-components"
import NavBar from "../../components/NavBar/NavBar"

const BackgroundImage = styled.img`
  width: 100%;
`

const BackgroundContainer = styled.div`
  width: 100vw;
`

export default function Home() {
    return (
      <div>
        <NavBar/>
      </div>
    )
}
  