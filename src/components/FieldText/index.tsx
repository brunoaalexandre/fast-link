import { Input } from "./styles";

type PlaceHolderProps = {
    text: string;
}

export function FieldText(props: PlaceHolderProps) {
    return(
        <Input placeholder={props.text} />        
    );
}