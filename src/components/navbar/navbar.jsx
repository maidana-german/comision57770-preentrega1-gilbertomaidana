import { Button, Flex } from 'antd';

const Navbar = () => {
    return (
        <div>
            <h1>- MercadoRopa -</h1>
            <h2>e-Commerce</h2>
            <Flex gap="small" wrap>
                <Button className="logo" type="primary">Zapatos</Button>
                <Button className="logo" type="primary">Pantalones</Button>
                <Button className="logo" type="primary">Camisas</Button>
                <Button className="logo" type="primary">Ambos</Button>
            </Flex>
        </div>
    )
}

export default Navbar