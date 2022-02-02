import { Container } from "./styles";

import errorImg from "../../assets/notfound.svg"
import { Link } from "react-router-dom";

export function Error() {
    return(
        <Container>
            <img src={errorImg} alt="Error 404" />
            <h1>Página não encontrada!</h1>
            <Link to="/">
                <button>Voltar para home!</button>
            </Link>
        </Container>
    );
}
