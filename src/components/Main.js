import { StyledMain } from "../styles";
import zero from "../assets/pepsi_black.png";
import normal from "../assets/pepsi_blue.png";
import diet from "../assets/pepsi_silver.png";

export default function Main({ activeCan, setParentCan }) {
    function canPicker(can) {
        switch (can) {
            case "normal":
                return normal;
            case "diet":
                return diet;
            default:
                return zero;
        }
    }
    return (
        <StyledMain can={activeCan}>
            <section>
                <article>
                    <h1>Lorem ipsum</h1>
                    <p>
                        Enim ut ipsum tempor voluptate irure sunt officia
                        deserunt dolore est. Quis sint ex ipsum ea veniam
                        commodo. Ex ut cupidatat labore aute tempor aute magna
                        pariatur eiusmod mollit proident cillum irure. Excepteur
                        voluptate deserunt nostrud deserunt nostrud
                        exercitation. Aliqua id exercitation id voluptate et
                        nisi id in laborum eiusmod consequat eu. Dolore esse
                        eiusmod consectetur qui exercitation tempor.
                    </p>
                    <button>VIEW ALL PRODUCTS</button>
                </article>
                <img src={canPicker(activeCan)} alt="pepsi can" />
            </section>
            <div>
                <img
                    src={normal}
                    alt="normal pepsi"
                    onClick={() => setParentCan("normal")}
                />
                <img
                    src={diet}
                    alt="diet pepsi"
                    onClick={() => setParentCan("diet")}
                />
                <img
                    src={zero}
                    alt="zero pepsi"
                    onClick={() => setParentCan("zero")}
                />
            </div>
        </StyledMain>
    );
}
