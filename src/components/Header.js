import React from "react";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { clickHelpChange } from "../redux/MarkdownSlice";

function Header() {
	const dispatch = useDispatch();
	return (
		<div className="header">
			<h1>Markdown Previewer</h1>
			<button onClick={() => dispatch(clickHelpChange())}>
				<FontAwesomeIcon icon={faQuestion} size="2x" />
			</button>
		</div>
	);
}

export default Header;
