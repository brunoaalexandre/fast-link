import { Input } from "./styles";

interface PlaceHolderProps {
    text: string;
}

export function FieldText(props: PlaceHolderProps) {
    return(
        <Input placeholder={props.text} />
    );
}
