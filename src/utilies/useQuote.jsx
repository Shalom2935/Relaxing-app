import { useContext } from "react";
import QuoteContext from "./QuoteContext";

const useQuote = () => {
    const context = useContext(<QuoteContext />);
    if (context === undefined) {
        throw Error('useQuote must be used within a QuoteProvider')
    }
    return context;
}
export default useQuote;