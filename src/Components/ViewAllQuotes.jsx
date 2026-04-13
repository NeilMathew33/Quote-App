import axios from 'axios'
import React, { useEffect, useState } from 'react'
import QuoteNavbar from './QuoteNavbar'

const ViewAllQuotes = () => {

    const [QuoteData, setQuoteData] = useState(
        { "quotes": [ ], }

    )
        const fetchData = () => {
            axios.get("https://dummyjson.com/quotes").then(
                (response) => {
                    setQuoteData (response.data)
                }
            ).catch()
        }
    

        useEffect(() => {fetchData()}, [])
    return (
        <div>
<QuoteNavbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Quote</th>
                                        <th scope="col">Author</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {QuoteData.quotes.map(
                                        (value, index) => {
                                            return (
                                                <tr>
                                                    <th scope="row">{value.id}</th>
                                                    <td>{value.quote}</td>
                                                    <td>{value.author}</td>
                                                    
                                                </tr>
                                            )
                                        }
                                    )}


                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAllQuotes