import React from 'react';
import ReactHtmlParser from 'html-react-parser';


export function HTML2React(props) {
    return <div>{ReactHtmlParser(props.html)}</div>;
}
