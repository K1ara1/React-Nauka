import React from 'react'
import { SearchBtn, SearchE, HomeBackground, HomeContainer, HomeContent, HomeVideo} from './StyledComponents';
import Background from '../../assets/Video.mp4'

function Home(){
    return(
        <>
            <HomeContainer>
                <HomeBackground>
                    <HomeVideo src={Background} autoPlay loop muted />
                </HomeBackground>
            </HomeContainer>
            <HomeContent>
                <SearchE />
                <SearchBtn>Find</SearchBtn>
            </HomeContent>
        </>
    )
}
export default Home;