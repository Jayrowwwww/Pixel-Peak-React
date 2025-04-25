import Cards from '../shared_comp/cards.jsx'
import Landing_Page from '../shared_comp/land-page.jsx'
import Second_page from '../shared_comp/second-home-page.jsx'

export default function Home(){

    return(
        <div className="h-auto">
            <Landing_Page/>
            <Second_page/>
            <Cards/>
        </div>
    )
}