export type IListnerCb = (x: string) => void;

const onChangeListeners: IListnerCb[] = [];

function push(pathname: string) {
  window.history.pushState({}, '', pathname);
  onChangeListeners.forEach((cb: IListnerCb) => cb(pathname));
}

window.onpopstate = () => {
  onChangeListeners.forEach((cb: IListnerCb) => cb(document.location.pathname));
};

export default {
  onChange: (cb: IListnerCb) => {
    onChangeListeners.push(cb);
  },
  push
};
