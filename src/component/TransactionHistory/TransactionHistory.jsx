import style from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
    return (
        <table className={style.table}>
            <thead className={style.tableThread}>
                <tr>
                    <th >Type</th>
                    <th >Amount</th>
                    <th >Currency</th>
                </tr>
            </thead>

            <tbody className={style.tableBody}>
                {items.map(({ id, type, amount, currency }) => (
                    <tr className={style.bodyTd} key={id}>
                        <td className={style.tableThreadItem}>{type}</td>
                        <td className={style.tableThreadItem}>{amount}</td>
                        <td className={style.tableThreadItem}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
