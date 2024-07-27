import { Table } from "../lib";
export default function STATUS_CODE404() {
    return(
    <div className=" min-h-screen bg-green-950">
        <Table.Row>
            <Table.Col props='col-sm-12'>
                <h1 className="text-center py-72 text-4xl text-cyan-200 animate-pulse">😞 404 Not Found!</h1>
                <p className="text-center text-xl text-cyan-200 animate-pulse">The requested resource could not be found on this server.</p>
            </Table.Col>
        </Table.Row>
        </div>
    );
}