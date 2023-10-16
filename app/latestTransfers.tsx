"use client"
import React from "react"
import axios from "axios"
// import { useQuery, gql } from "@apollo/client";

// const LATEST_TRANSFERs = gql`
//   query transfers($first: Int!) {
//     transfers(first: $first) {
//       transactionHash
//       id
//       __typename
//       from
//       to
//       value
//       blockTimestamp
//     }
//   }
// `;

function LatestTransfers() {
    const [getTransfers, setGetTransfers] = React.useState<Array<string>>([])
    const [isLoading, setIsLoading] = React.useState<Boolean>(false)
    const [isError, setIsError] = React.useState<String>("")
    const [buttonLoading, setButtonLoading] = React.useState<Boolean>(false)
    // const { loading, error, data } = useQuery(LATEST_TRANSFERs, {
    //   variables: {
    //     first: 10,
    //   },
    // });

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;
    // console.log(data);

    const main = async () => {
        setButtonLoading(true)
        const result = await axios.post(
            "https://api.studio.thegraph.com/query/55579/test-cryptopunks/v0.0.1",
            {
                query: `
        {
          transfers(first: 10) {
            transactionHash
            id
            __typename
            from
            to
            value
            blockTimestamp
          }
        }
        `,
            }
        )
        console.log(result)
        // console.log(result.data.errors[0].message)
        // console.log(result.data.data.transfers)
        setGetTransfers(result.data.data.transfers)
        setIsLoading(true)
        if (result.status === 200) {
            setIsError("ok")
        }
        setButtonLoading(false)
    }
    const transferList: Array<string> = getTransfers

    return (
        <div className="data-wrapper">
            <button onClick={main}>
                {buttonLoading ? "Loading..." : "Fetch Data"}
            </button>
            <h1>Transaction Data Table</h1>

            <table>
                <thead>
                    <tr>
                        <th>Transaction Hash</th>
                        <th>ID</th>
                        <th>__typename</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Value</th>
                        <th>blockTimestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <>
                            {isError === "ok"
                                ? transferList.map((x: any, key = 1) => {
                                      return (
                                          <tr key={key++}>
                                              <td>{x.transactionHash}</td>
                                              <td>{x.id}</td>
                                              <td>{x.__typename}</td>
                                              <td>{x.from}</td>
                                              <td>{x.to}</td>
                                              <td>{x.value}</td>
                                              <td>{x.blockTimestamp}</td>
                                          </tr>
                                      )
                                  })
                                : "Error while fetching subgraph"}
                        </>
                    ) : (
                        "Nothing To show"
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default LatestTransfers
