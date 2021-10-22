import { log_action, filter_mode, filter_mode_styles } from './utils';
import './index.scss';

// useful BdApi stuff
const { React, ReactDOM } = BdApi;

const siblingClassName = 'privateChannelsHeaderContainer-3NB1K1';
const buttonContainerId = 'buttonFilterContainer';
const cssId = 'groupdm-filter';

function FilterButtons() {
	const [isGroup, setIsGroup] = React.useState<filter_mode>(BdApi.loadData('groupdm', 'isGroup'));

	React.useEffect(() => {
		BdApi.clearCSS(cssId);
		BdApi.injectCSS(cssId, filter_mode_styles[isGroup]);
	}, [isGroup]);

	const setIsGroupWithStore = (newVal: filter_mode) => {
		setIsGroup(newVal);
		BdApi.setData('groupdm', 'isGroup', newVal);
	};

	return (
		<>
			<button
				className={`filterButtons ${isGroup == filter_mode.BOTH ? 'selected' : ''}`}
				onClick={() => setIsGroupWithStore(filter_mode.BOTH)}
			>
				Both
			</button>
			<button
				className={`filterButtons ${isGroup == filter_mode.DM ? 'selected' : ''}`}
				onClick={() => setIsGroupWithStore(filter_mode.DM)}
			>
				DMs
			</button>
			<button
				className={`filterButtons ${isGroup == filter_mode.GROUP ? 'selected' : ''}`}
				onClick={() => setIsGroupWithStore(filter_mode.GROUP)}
			>
				Group
			</button>
		</>
	);
}

function create_dom_container() {
	const beforeEl = document.getElementsByClassName(siblingClassName)[0];
	const buttonContainer = document.createElement('div');
	buttonContainer.id = buttonContainerId;
	beforeEl.insertAdjacentElement('beforebegin', buttonContainer);
}

async function render_filter_buttons() {
	if (document.getElementsByClassName(siblingClassName)[0] && !document.getElementById(buttonContainerId)) {
		create_dom_container();
		ReactDOM.render(<FilterButtons />, document.getElementById(buttonContainerId));
	}
}

module.exports = class groupdm {
	load() {
		BdApi.saveData('groupdm', 'isGroup', filter_mode.DM);
	}
	start() {
		log_action('[groupdm]', 'Started!');
		render_filter_buttons();
	}
	stop() {
		BdApi.clearCSS(cssId);
	}
	onSwitch() {
		render_filter_buttons();
	}
};
