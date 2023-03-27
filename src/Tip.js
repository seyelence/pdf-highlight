
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });

var react_1 = require("react");
var Tip = (function (_super) {
    __extends(Tip, _super);
    function Tip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            compact: true,
            text: "",
        };
        return _this;
    }
    // for TipContainer
    Tip.prototype.componentDidUpdate = function (nextProps, nextState) {
        var onUpdate = this.props.onUpdate;
        if (onUpdate && this.state.compact !== nextState.compact) {
            onUpdate();
        }
    };
    Tip.prototype.render = function () {
        var _this = this;
        var _a = this.props, onConfirm = _a.onConfirm, onOpen = _a.onOpen;
        var _b = this.state, compact = _b.compact, text = _b.text, emoji = _b.emoji;
        return (<div className="Tip">
        {compact ? (<div className="Tip__compact" onClick={function () {
                    onOpen();
                    _this.setState({ compact: false });
                }}>
            Add highlight
          </div>) : (<form className="Tip__card" onSubmit={function (event) {
                    event.preventDefault();
                    onConfirm({ text: text});
                }}>
            <div>
              <textarea placeholder="Your note" autoFocus value={text} onChange={function (event) {
                    return _this.setState({ text: event.target.value });
                }} ref={function (node) {
                    if (node) {
                        node.focus();
                    }
                }}/>
            </div>

            <div>
              <input type="submit" value="Save"/>
            </div>
          </form>)}
      </div>);
    };
    return Tip;
}(react_1.Component));

export default Tip;
