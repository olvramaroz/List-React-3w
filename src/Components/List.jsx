import React from 'react'
import Data from '../Data/data.jsx'
import Madagascar from '../Data/Madagascar.jsx'

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mainList: Data
        }
    }


    render() {

        const updateList = Madagascar.map((newItem) =>
                <ul>
                    <li key={newItem}>
                        {newItem}
                    </li>
                </ul>
        )

        return(
            <>
                <section>
                    {this.state.mainList.map((item) => {
                        return <ul>
                            <li key={item.id}>
                                {item.title} : {item.content}
                            </li>
                        </ul>
                    })
                    }                    
                </section>

                <h2>Nouvelle liste de bonnes choses</h2>
                {updateList}
            </>
        )
    }

}
export default List

