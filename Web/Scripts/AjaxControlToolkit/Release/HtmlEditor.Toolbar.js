﻿Type.registerNamespace("Sys.Extended.UI.HtmlEditor");Sys.Extended.UI.HtmlEditor.Toolbar=function(n){Sys.Extended.UI.HtmlEditor.Toolbar.initializeBase(this,[n]);this._loaded=!1;this._cachedButtonIds=null;this._cachedEditPanel=null;this._buttons=null;this._alwaysVisible=!1;this._app_onload$delegate=Function.createDelegate(this,this._app_onload)};Sys.Extended.UI.HtmlEditor.Toolbar.prototype={get_alwaysVisible:function(){return this._alwaysVisible},set_alwaysVisible:function(n){this._alwaysVisible=n;this.get_isInitialized()&&this.raisePropertyChanged("alwaysVisible")},set_activeEditPanel:function(n){if(!this._loaded){this._cachedEditPanel=n;return}for(var t=0;t<this.get_buttons().length;t++)this.get_buttons()[t].set_activeEditPanel(n)},disable:function(){if(this.get_isInitialized()){if(this._alwaysVisible)return;for(var n=0;n<this.get_buttons().length;n++)this.get_buttons()[n].set_activeEditPanel(null)}},get_buttons:function(){return this._buttons==null&&(this._buttons=[]),this._buttons},set_buttons:function(n){this.get_buttons().push(n)},get_buttonIds:function(){},set_buttonIds:function(n){var i,t;if(!this.get_isInitialized()){this._cachedButtonIds=n;return}for(i=n.split(";"),t=0;t<i.length;t++)i[t].length>0&&this.set_buttons($find(i[t]))},initialize:function(){Sys.Extended.UI.HtmlEditor.Toolbar.callBaseMethod(this,"initialize");Sys.Application.add_load(this._app_onload$delegate)},dispose:function(){this._loaded=!1;Sys.Application.remove_load(this._app_onload$delegate);Sys.Extended.UI.HtmlEditor.Toolbar.callBaseMethod(this,"dispose")},_app_onload:function(){this._cachedButtonIds!=null&&(this.set_buttonIds(this._cachedButtonIds),this._cachedButtonIds=null);this._loaded=!0;this._cachedEditPanel!=null&&(this.set_activeEditPanel(this._cachedEditPanel),this._cachedEditPanel=null)}};Sys.Extended.UI.HtmlEditor.Toolbar.registerClass("Sys.Extended.UI.HtmlEditor.Toolbar",Sys.UI.Control);