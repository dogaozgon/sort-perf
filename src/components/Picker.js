import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Picker(props) {
	const handleChange = (event, newValue) => {
		const pickerName = event.target.name;
		if (newValue !== null) {
			props.onChange(newValue, pickerName);
		}
	};

	return (
		<div style={{ marginLeft: "16px", marginRight: "16px" }}>
			<h2>{props.prompt}</h2>
			<ToggleButtonGroup
				color="primary"
				value={props.selectedItem}
				exclusive
				onChange={handleChange}
				size="medium"
			>
				{props.values.map((value, index) => (
					<ToggleButton key={index} value={value} name={props.name}>
						{props.labels[index]}
					</ToggleButton>
				))}
			</ToggleButtonGroup>
		</div>
	);
}
