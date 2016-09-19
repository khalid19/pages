if (self.CavalryLogger) { CavalryLogger.start_js(["fDLHQ"]); }

__d("EmbeddedPostPluginActions",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={EMBEDDED_POSTS_COMMENT:"embedded_post_comment",EMBEDDED_POSTS_LIKE:"embedded_post_like",EMBEDDED_POSTS_SHARE:"embedded_post_share",EMBEDDED_POSTS_UNLIKE:"embedded_post_unlike"};}),null);
__d("EmbeddedPostPluginActionTypes",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CLICK:"click"};}),null);
__d("FBFeedLocations",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={NEWSFEED:1,GROUP:2,GROUP_PERMALINK:3,COMMUNITY:4,PERMALINK:5,SHARE_OVERLAY:6,PERMALINK_STREAM:7,GROUP_PINNED:8,FRIEND_LIST:9,TIMELINE:10,HASHTAG_FEED:11,TOPIC_FEED:12,PAGE:13,NOTIFICATION_FEED:14,GROUP_REPORTED:15,GROUP_PENDING:16,PAGES_FEED_IN_PAGES_MANAGER:17,TICKER_CLASSIC:18,PAGES_SUGGESTED_FEED_IN_PAGES_MANAGER:19,SEARCH:20,GROUP_SEARCH:21,NO_ATTACHMENT:22,EMBED:23,EMBED_FEED:24,ATTACHMENT_PREVIEW:25,STORIES_TO_SHARE:26,PROMPT_PERMALINK:27,TREND_HOVERCARD:28,OPEN_GRAPH_PREVIEW:30,HOTPOST_IN_PAGES_FEED:31,SCHEDULED_POSTS:32,TIMELINE_NOTES:33,PAGE_INSIGHTS:34,COMMENT_ATTACHMENT:35,PAGE_TIMELINE:36,GOODWILL_THROWBACK_PERMALINK:37,LIKE_CONFIRM:39,GOODWILL_THROWBACK_PROMOTION:40,SPACES_FEED:41,BROWSE_CONSOLE:42,GROUP_FOR_SALE_COMPACT:43,ENTITY_FEED:44,GROUP_FOR_SALE_DISCUSSION:45,PAGES_CONTENT_TAB_PREVIEW:46,GOODWILL_THROWBACK_SHARE:47,TIMELINE_VIDEO_SHARES:48,EVENT:49,PAGE_PLUGIN:50,SRT:51,PAGES_CONTENT_TAB_INSIGHTS:52,ADS_PE_CONTENT_TAB_INSIGHTS:53,PAGE_ACTIVITY_FEED:54,VIDEO_CHANNEL:55,POST_TO_PAGE:56,GROUPS_GSYM_HOVERCARD:57,GROUP_POST_TOPIC_FEED:58,FEED_SURVEY:59,PAGES_MODERATION:60,SAVED_DASHBOARD:61,PULSE_SEARCH:62,GROUP_NUX:63,GROUP_NUX_POST_VIEW:64,EVENT_PERMALINK:65,FUNDRAISER_PAGE:66,EXPLORE_FEED:67,CRT:68,REVIEWS_FEED:69,VIDEO_HOME_CHANNEL:70,NEWS:71,TIMELINE_FRIENDSHIP:72,SAVED_REMINDERS:73,PSYM:74,ADMIN_FEED:75,CAMPFIRE_NOTE:76,PAGES_CONTEXT_CARD:77,ACTIVITY_LOG:78,WALL_POST_REPORT:79,TIMELINE_BREAKUP:80,POLITICIANS_FEED:81,PRODUCT_DETAILS:82,SPORTS_PLAY_FEED:83,GROUP_TOP_STORIES:84,PAGE_TIMELINE_PERMALINK:86,OFFERS_WALLET:87,INSTREAM_VIDEO_IN_LIVE:88,SPOTLIGHT:89,SEARCH_DERP:90,SOCIAL_BALLOT:91,GROUP_SUGGESTIONS_WITH_STORY:92,SOCIAL_BALLOT_PERMALINK:93,LOCAL_SERP:94,FUNDRAISER_SELF_DONATION_FEED:95,MY_ACTIVITY:96,CONVERSATION_NUB:97,GROUP_TOP_SALE_STORIES:98,GROUP_LEARNING_COURSE_UNIT_FEED:99,SUPPORT_INBOX_READ_TIME_BLOCK:100,PAGE_POSTS_CARD:101,CRISIS_POST:102,SUPPORT_INBOX_GROUP_RESPONSIBLE:103,PAGE_POST_DIALOG:104,CRISIS_DIALOG_POST:105,PAGE_LIVE_VIDEOS_CARD:106,PAGE_POSTS_CARD_COMPACT:107,GROUP_MEMBER_BIO_FEED:108,LIVE_COMMENT_ATTACHMENT:109,GROUP_COMPOSER:110,GROUP_INBOX:111};}),null);
__d("VideoPlayerReason",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={AUTOPLAY:"autoplay_initiated",USER:"user_initiated",PAGE_VISIBILITY:"page_visibility_initiated",SEEK:"seek_initiated",LOOP:"loop_initiated",EMBEDDED_VIDEO_API:"embedded_video_api_initiated",CONNECTION:"host-connection-error",VIDEO_DATA_REPLACED:"video_data_replaced",VOD_NOT_READY:"vod_not_ready",VIDEO_DATA_SWITCH:"video_data_switch",FALLBACK_MODE:"fallback_mode",COMMERCIAL_BREAK:"commercial_break",SPHERICAL_FALLBACK:"spherical_fallback"};}),null);
__d('NonBlockingIFrame',['Promise','DOM','TimeSlice'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i,j;function k(){var n=arguments.length<=0||arguments[0]===undefined?h:arguments[0],o=arguments.length<=1||arguments[1]===undefined?document.body:arguments[1],p,q={className:'nonBlockingIframe',width:0,height:0,frameborder:0,scrolling:'no','aria-hidden':'true'};if(n!==h)q.src=n;p=c('DOM').create('iframe',q);p.style.left='-1000px';p.style.position='absolute';c('DOM').appendContent(o,p);if(n===h){p.contentDocument.open();p.contentDocument.close();}return p;}function l(){return new (c('Promise'))(function(n){if(!i)i=k();if(i.contentDocument.readyState==='complete'){n(i);}else{if(!j)j=new (c('Promise'))(function(o){i.contentWindow.onload=c('TimeSlice').guard(function(){o(i);},'NonBlockingIFrame window.onload');});n(j);}});}var m={loadImage:function n(o){return l().then(function(p){return new (c('Promise'))(function(q,r){var s=p.contentWindow.Image,t=new s();t.onload=c('TimeSlice').guard(function(){q(t);},'NonBlockingIFrame image.onload');t.onerror=c('TimeSlice').guard(function(){r(t);},'NonBlockingIFrame image.onerror');t.onabort=c('TimeSlice').guard(function(){r(t);},'NonBlockingIFrame image.onabort');t.src=o;});});},loadIFrame:function n(){var o=arguments.length<=0||arguments[0]===undefined?h:arguments[0];return l().then(function(p){var q=p.contentDocument.body;return k(o,q);});}};f.exports=m;}),null);
__d('isAccountKitURI',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=new RegExp('(^|\\.)accountkit\\.com$','i'),i=['https'];function j(k){if(k.isEmpty()&&k.toString()!=='#')return false;if(!k.getDomain()&&!k.getProtocol())return false;return (i.indexOf(k.getProtocol())!==-1&&h.test(k.getDomain()));}f.exports=j;}),null);
__d('isAtlassolutionsDotComURI',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=new RegExp('(^|\\.)atlassolutions\\.com$','i'),i=['https'];function j(k){if(k.isEmpty()&&k.toString()!=='#')return false;if(!k.getDomain()&&!k.getProtocol())return true;return (i.indexOf(k.getProtocol())!==-1&&h.test(k.getDomain()));}f.exports=j;}),null);
__d('isInstagramURI',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){if(i.isEmpty()&&i.toString()!=='#')return false;if(!i.getDomain()&&!i.getProtocol())return false;return i.isSecure()&&i.isSubdomainOfDomain('instagram.com');}f.exports=h;}),null);
__d('isWitDotAiURI',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=new RegExp('(^|\\.)wit\\.ai$','i'),i=['https'];function j(k){if(k.isEmpty()&&k.toString()!=='#')return false;if(!k.getDomain()&&!k.getProtocol())return true;return (i.indexOf(k.getProtocol())!==-1&&h.test(k.getDomain()));}f.exports=j;}),null);
__d('AsyncSignal',['Promise','ErrorUtils','NonBlockingIFrame','Run','QueryString','TrackingConfig','URI','WebSpeedExperiments','ZeroRewrites','isAccountKitURI','isAtlassolutionsDotComURI','isFacebookURI','isInstagramURI','isMessengerDotComURI','isWitDotAiURI','getAsyncParams','memoize'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h;function i(j,k){this.data=k||{};this.uri=j.toString();if(c('TrackingConfig').domain&&this.uri.charAt(0)=='/')this.uri=c('TrackingConfig').domain+this.uri;}i.prototype.setHandler=function(j){this.handler=j;return this;};i.prototype.setTimeout=function(j){this.timeout=j;return this;};i.prototype.send=function(){var j=this.handler,k=this.data;k.asyncSignal=(Math.random()*10000|0)+1;var l=c('ZeroRewrites').rewriteURI(new (c('URI'))(this.uri)),m=c('isFacebookURI')(l)||c('isMessengerDotComURI')(l)||c('isAtlassolutionsDotComURI')(l)||c('isWitDotAiURI')(l)||c('isInstagramURI')(l)||c('isAccountKitURI')(l);if(m){Object.assign(k,c('getAsyncParams')('POST'));}else throw new Error("'"+this.uri+"' "+"is an external URL, you should not send async signals to offsite links.");var n=c('QueryString').appendToUrl(this.uri,k),o;if(c('WebSpeedExperiments').non_blocking_logger){o=c('NonBlockingIFrame').loadImage(n);}else{if(!h)h=new (c('Promise'))(function(r){c('Run').onAfterLoad(r);});o=h.then(function(){return new (c('Promise'))(function(r,s){var t=new Image();t.onload=r;t.onerror=t.onabort=s;t.src=n;});});}if(j){var p=false,q=c('memoize')(function(){c('ErrorUtils').applyWithGuard(j,null,[p]);});o.then(function(){p=true;q();},q).done();if(this.timeout)setTimeout(q,this.timeout);}return this;};f.exports=i;}),null);
__d('LinkshimAsyncLink',['$','AsyncSignal','DataAttributeUtils','DOM','UserAgent_DEPRECATED','LinkshimHandlerConfig'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={addTrackingToken:function i(j,k){c('DataAttributeUtils').setDataAttribute(j,'data-xt',k.token);},setupWithTrackingTokenReference:function i(j,k){var l='xt='+k.token,m=j.href.split('#'),n=m[0].indexOf('?')!==-1,o=n?m[0].replace(/([\?|&]xt=[^&]*)/,'')+'&'+l+(m[1]||''):j.href+='?'+l;j.href=o;var p=j.onmousedown;j.onmousedown=function(q){h.swap(this,o);j.href=j.href.replace(/([\?|&]sig=[^&]*)/,'')+'&sig='+Math.floor(Math.random()*65535+65536);if(typeof p==='function')p();};},swap:function i(j,k){var l=c('UserAgent_DEPRECATED').ie()<=8;if(l){var m=c('DOM').create('wbr',{},null);c('DOM').appendContent(j,m);}j.href=k;if(l)c('DOM').remove(m);},referrer_log:function i(j,k,l){var m=c('$')('meta_referrer');m.content=c('LinkshimHandlerConfig').switched_meta_referrer_policy;h.swap(j,k);setTimeout(function(){m.content=c('LinkshimHandlerConfig').default_meta_referrer_policy;new (c('AsyncSignal'))(l,{}).send();},100);}};f.exports=h;}),null);
__d('legacy:dom-asynclinkshim',['LinkshimAsyncLink'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.LinkshimAsyncLink=c('LinkshimAsyncLink');}),3);
__d('AttachmentRelatedShareConstants',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={ARTICLE_CLICK:'article_click',VIDEO_CLICK:'video_click',FBVIDEO_CLICK:'fbvideo_click',FBVIDEO_VIEW:'fbvideo_view',GAME_CLICK:'game_click',EVENT_DELAY:1000,HIDE_DELAY:100,PHOTO_CLICK:'photo_click',EVENT_JOIN:'event_join',PRODUCT_CLICK:'product_click'};f.exports=h;}),null);
__d("XPubcontentInlinePhotoPivotsEventsController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pubcontent\/inline_photo_pivots_chaining\/events\/",{});}),null);
__d('tidyEvent',['Run'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=[];function i(){while(h.length){var l=h.shift();l&&l.remove?l.remove():l.unsubscribe();}}function j(l){var m;function n(){if(!m)return;m.apply(l,arguments);m=null;l=null;}if(l.remove){m=l.remove;l.remove=n;}else{m=l.unsubscribe;l.unsubscribe=n;}return l;}function k(l){if(!h.length)c('Run').onLeave(i);if(Array.isArray(l)){for(var m=0;m<l.length;m++)h.push(j(l[m]));}else h.push(j(l));return l;}f.exports=k;}),null);
__d('EntstreamAttachmentRelatedShare',['csx','cx','Arbiter','AsyncRequest','AttachmentRelatedShareConstants','CSS','DOM','Event','XPubcontentInlinePhotoPivotsEventsController','ge','getOrCreateDOMID','tidyEvent'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=2,k=3,l={loadRelatedAttachment:function m(n,o,p){var q=null;if(typeof n==="string"){q=c('ge')(n);}else q=n;if(!q)return;var r=c('Event').listen(q,'click',function(){r.remove();c('Arbiter').inform(c('AttachmentRelatedShareConstants').ARTICLE_CLICK,{attachment:q,global_share_id:o,is_right_click:false,share_id:p});}),s=c('Event').listen(q,'mousedown',function(event){if(event.which===k||event.button===j){s.remove();c('Arbiter').inform(c('AttachmentRelatedShareConstants').ARTICLE_CLICK,{attachment:q,global_share_id:o,is_right_click:true});}});},loadInlineStoryPivotAttachment:function m(n,o){var p=c('ge')(n);if(!p)return;var q=c('Event').listen(p,'click',function(){q.remove();c('Arbiter').inform(c('AttachmentRelatedShareConstants').PHOTO_CLICK,{attachment:p,storyid:o});});},loadRelatedGameAttachment:function m(n,o){var p=null;if(typeof n==="string"){p=c('ge')(n);}else p=n;if(!p)return;c('tidyEvent')(c('Event').listen(p,'click',function(){c('Arbiter').inform(c('AttachmentRelatedShareConstants').GAME_CLICK,{attachment:p,global_share_id:o});}));c('tidyEvent')(c('Event').listen(p,'mousedown',function(event){if(event.which===k||event.button===j)c('Arbiter').inform(c('AttachmentRelatedShareConstants').GAME_CLICK,{attachment:p,global_share_id:o});}));},loadRelatedLSCVideoAttachment:function m(n,o){var p=null;if(typeof n==='string'){p=c('ge')(n);}else p=n;if(!p)return;var q="^div._4-u2",r=c('DOM').scry(p,q),s=c('Event').listen(p,'click',function(){s.remove();c('Arbiter').inform(c('AttachmentRelatedShareConstants').VIDEO_CLICK,{attachment:p,global_share_id:o});});},loadRelatedLSCInlineVideoAttachment:function m(n,o){var p=null;if(typeof n==='string'){p=c('ge')(n);}else p=n;if(!p)return;c('Event').listen(p,'click',function(){var q="^div._4-u2",r="_1d8v",s=c('DOM').scry(p,q),t=s.length===1?s[0]:null,u=t.parentNode,v=u.previousSibling;while(!v){u=u.parentNode;v=u.previousSibling;}if(!c('CSS').hasClass(v,r)){var w=c('DOM').create('div',{className:r}),x=c('DOM').insertBefore(t.parentNode,w),y=x.length>=1?x[0]:null;}else y=v;var z=c('getOrCreateDOMID')(y);new (c('AsyncRequest'))().setURI('/ajax/flash/expand_inline.php').setData({share_id:o,target_div:z,max_width:470,max_height:264,replace_target_div:true}).setMethod('GET').setReadOnly(true).setRelativeTo(p.parentNode).send();});},loadRelatedEventsPivotAttachment:function m(n,o){var p=null;if(typeof n==="string"){p=c('ge')(n);}else p=n;if(!p)return;c('tidyEvent')(c('Event').listen(p,'click',function(){c('Arbiter').inform(c('AttachmentRelatedShareConstants').EVENT_JOIN,{attachment:p,event_id:o});}));},loadRelatedProductAttachment:function m(n,o){var p=null;if(typeof n==='string'){p=c('ge')(n);}else p=n;if(!p)return;c('tidyEvent')(c('Event').listen(p,'click',function(){c('Arbiter').inform(c('AttachmentRelatedShareConstants').PRODUCT_CLICK,{attachment:p,product_id:o});}));},closeButton:function m(n,o){c('Event').listen(n,'click',function(){c('DOM').remove(o);});},closeButtonPhotoPivots:function m(n,o,p,q){c('Event').listen(n,'click',function(){var r=c('XPubcontentInlinePhotoPivotsEventsController').getURIBuilder(),s={story_id:p,search_query_type:q,event:'hide'};new (c('AsyncRequest'))().setMethod('POST').setURI(r.getURI()).setData(s).send();c('DOM').remove(o);});},seeAllLinkPhotoPivots:function m(n,o,p){c('Event').listen(n,'click',function(){var q=c('XPubcontentInlinePhotoPivotsEventsController').getURIBuilder(),r={story_id:o,search_query_type:p,event:'see_all'};new (c('AsyncRequest'))().setMethod('POST').setURI(q.getURI()).setData(r).send();});},removeOldSuggestions:function m(n){var o=c('ge')(n);if(!o)return;var p=c('DOM').scry(o.parentNode,"._5d73");for(var q=1;q<p.length;q++)c('DOM').remove(p[q]);setTimeout(function(){c('CSS').show(p[0]);},1000);},showHiddenSuggestions:function m(n){var o=c('Event').listen(n,'click',function(){o.remove();var p="^._1ui8",q=c('DOM').scry(n,p);if(!q)return;c('CSS').hide(q[0]);var r=q[0].previousSibling;while(r){c('CSS').show(r);r=r.previousSibling;}});}};f.exports=l;}),null);
__d('collectDataAttributes',['DataAttributeUtils','getContextualParent'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='normal';function i(j,k,l){var m={},n=[],o=k.length,p;for(p=0;p<o;++p){m[k[p]]={};n.push('data-'+k[p]);}if(l){m[h]={};for(p=0;p<(l||[]).length;++p)n.push(l[p]);}var q={tn:'',"tn-debug":','};while(j){if(j.getAttribute)for(p=0;p<n.length;++p){var r=n[p],s=c('DataAttributeUtils').getDataAttribute(j,r);if(s){if(p>=o){if(m[h][r]===undefined)m[h][r]=s;continue;}var t=JSON.parse(s);for(var u in t)if(q[u]!==undefined){if(m[k[p]][u]===undefined)m[k[p]][u]=[];m[k[p]][u].push(t[u]);}else if(m[k[p]][u]===undefined)m[k[p]][u]=t[u];}}j=c('getContextualParent')(j);}for(var v in m)for(var w in q)if(m[v][w]!==undefined)m[v][w]=m[v][w].join(q[w]);return m;}f.exports=i;}),null);
__d('FeedTrackingAsync',['Arbiter','Run','collectDataAttributes'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h;f.exports.init=function(){if(h)return;h=c('Arbiter').subscribe('AsyncRequest/send',function(i,j){var k=j.request,l=k.getRelativeTo();if(l){var m=k.getData(),n=c('collectDataAttributes')(l,['ft']);if(n.ft&&Object.keys(n.ft).length)Object.assign(m,n);}});c('Run').onLeave(function(){h.unsubscribe();h=null;});};}),null);
__d('LitestandMessages',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={NEWSFEED_LOAD:'LitestandMessages/NewsFeedLoad',LEAVE_HOME:'LitestandMessages/LeaveHome',STORIES_REQUESTED:'LitestandMessages/StoriesRequested',STORIES_INSERTED:'LitestandMessages/StoriesInserted',NEWER_STORIES_REQUESTED:'LitestandMessages/NewerStoriesRequested',NEWER_STORIES_INSERTED:'LitestandMessages/NewerStoriesInserted',NEW_STORIES_CONTAINER_CREATED:'LitestandMessages/NewStoriesContainer',RHC_RELOADED:'LitestandMessages/RHCReloaded',STREAM_LOAD_ERROR:'LitestandMessages/StreamLoadError',DUPLICATE_CURSOR_ERROR:'LitestandMessages/DuplicateCursorError',STREAM_LOAD_RETRY:'LitestandMessages/StreamLoadRetry'};f.exports=h;}),null);
__d('ServerTime',['InitialServerTime'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();k(c('InitialServerTime').serverTime);var h;function i(){return Date.now()-h;}function j(){return h;}function k(l){h=Date.now()-l;}f.exports={getMillis:i,getOffsetMillis:j,update:k,get:i,getSkew:j};}),null);
__d('LiveTimer',['fbt','csx','cx','CSS','DOM','ServerTime'],(function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=1000,l=60,m=3600,n=43200,o=86400,p=60,q=60000,r={restart:function s(t){c('ServerTime').update(t*1000);this.updateTimeStamps();},getApproximateServerTime:function s(){return c('ServerTime').get();},getServerTimeOffset:function s(){return -1*c('ServerTime').getSkew();},updateTimeStamps:function s(){this.timestamps=c('DOM').scry(document.body,'abbr.livetimestamp');this.startLoop(q);},addTimeStamps:function s(t){if(!t)return;this.timestamps=this.timestamps||[];if(c('DOM').isNodeOfType(t,'abbr')&&c('CSS').hasClass(t,'livetimestamp')){this.timestamps.push(t);}else{var u=c('DOM').scry(t,'abbr.livetimestamp');for(var v=0;v<u.length;++v)this.timestamps.push(u[v]);}this.startLoop(0);},removeTimestamp:function s(t){if(!this.timestamps||!t)return;var u=this.timestamps.indexOf(t);if(u>-1)this.timestamps.splice(u,1);},startLoop:function s(t){this.stop();this.timeout=setTimeout(function(){this.loop();}.bind(this),t);},stop:function s(){clearTimeout(this.timeout);},loop:function s(t){if(t)this.updateTimeStamps();var u=Math.floor(c('ServerTime').get()/k),v=-1;this.timestamps&&this.timestamps.forEach(function(x){var y=x.getAttribute('data-utime'),z=x.getAttribute('data-shorten'),aa=x.getAttribute('data-minimize'),ba=this.renderRelativeTime(u,y,z,aa);if(ba.text){var ca={'class':"timestampContent"},da=c('DOM').scry(x,".timestampContent")[0],ea=da&&da.getAttribute('id');if(ea)ca.id=ea;c('DOM').setContent(x,c('DOM').create('span',ca,ba.text));}if(ba.next!=-1&&(ba.next<v||v==-1))v=ba.next;}.bind(this));if(v!=-1){var w=Math.max(q,v*k);this.timeout=setTimeout(function(){this.loop();}.bind(this),w);}},renderRelativeTime:function s(t,u,v,w){var x={text:"",next:-1};if(t-u>o)return x;var y=t-u,z=Math.floor(y/l),aa=Math.floor(z/p);if(z<1){if(w){x.text=h._("1m");x.next=20-y%20;}else if(v){x.text=h._("Just now");x.next=20-y%20;}else{x.text=h._("a few seconds ago");x.next=l-y%l;}return x;}if(aa<1){if(w){x.text=h._({"*":"{number}m"},[h.param('number',z,[0])]);}else if(v&&z==1){x.text=h._("1 min");}else if(v){x.text=h._({"*":"{number} mins"},[h.param('number',z,[0])]);}else x.text=z==1?h._("about a minute ago"):h._({"*":"{number} minutes ago"},[h.param('number',z,[0])]);x.next=l-y%l;return x;}if(aa<11)x.next=m-y%m;if(w){x.text=h._({"*":"{number}h"},[h.param('number',aa,[0])]);}else if(v&&aa==1){x.text=h._("1 hr");}else if(v){x.text=h._({"*":"{number} hrs"},[h.param('number',aa,[0])]);}else x.text=aa==1?h._("about an hour ago"):h._({"*":"{number} hours ago"},[h.param('number',aa,[0])]);return x;},renderRelativeTimeToServer:function s(t,u,v){return this.renderRelativeTime(Math.floor(c('ServerTime').get()/k),t,u,v);}};f.exports=r;f.exports.CONSTS={MS_IN_SEC:k,SEC_IN_MIN:l,SEC_IN_HOUR:m,SEC_IN_12_HOUR:n,SEC_IN_24_HOUR:o,MIN_IN_HOUR:p,HEARTBEAT:q};}),null);
__d('AsyncFormRequestUtils',['Arbiter'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={subscribe:function i(j,k,l){c('Arbiter').subscribe('AsyncRequest/'+k,function(m,n){var o=n.request.relativeTo;if(o&&o===j)l(n);});}};f.exports=h;}),null);
__d('PluginTabLoadMore',['CSS','Event'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={noMoreContent:function i(){c('Event').fire(this.root,'noMoreContent');c('CSS').hide(this.spinner);},setCursor:function i(j){c('Event').fire(this.root,'setCursor',j);},init:function i(j,k){this.root=j;this.spinner=k;}};f.exports=h;}),null);
__d("XPostPluginLoggingController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/platform\/plugin\/post\/logging\/",{});}),null);
__d('PluginFeedFooterActionLogger',['AsyncRequest','DOM','EmbeddedPostPluginActions','EmbeddedPostPluginActionTypes','Event','XPostPluginLoggingController'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={initializeClickLoggers:function i(j,k,l,m,n,o,p,q,r){var s=function t(u,v){try{var x=c('DOM').find(j,'.'+u);c('Event').listen(x,'click',function(y){new (c('AsyncRequest'))().setURI(c('XPostPluginLoggingController').getURIBuilder().getURI()).setData({action:v,action_type:c('EmbeddedPostPluginActionTypes').CLICK,source:o,story_token:p,referer_url:q,is_sdk:r}).send();});}catch(w){}};s(k,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_LIKE);s(l,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_UNLIKE);s(m,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_COMMENT);s(n,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_SHARE);}};f.exports=h;}),null);
__d('randomInt',['invariant'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k){var l=arguments.length;!(l>0&&l<=2)?h(0):void 0;if(l===1){k=j;j=0;}k=k;!(k>j)?h(0):void 0;var m=this.random||Math.random;return Math.floor(j+m()*(k-j));}f.exports=i;}),null);
__d('ClientIDs',['randomInt'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i={getNewClientID:function j(){var k=Date.now(),l=k+':'+(c('randomInt')(0,4294967295)+1);h[l]=true;return l;},isExistingClientID:function j(k){return !!h[k];}};f.exports=i;}),null);
__d('PluginFeedLikeButton',['Arbiter','AsyncFormRequestUtils','ClientIDs','CSS','DOM','DOMEventListener','FBFeedLocations','FormSubmit','Keys','PluginOptin','URI'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();window.resetConfirmStoryLike=function(i){c('CSS').show(c('DOM').find(document,'#likeStory_'+i));c('DOM').remove(c('DOM').find(document,'#confirmStory_'+i));};var h={addClientId:function i(j){j.setAttribute('value',c('ClientIDs').getNewClientID());},loggedOutLikeButton:function i(j,k,l){var m='';if(k===c('FBFeedLocations').EMBED){m='post';}else if(k===c('FBFeedLocations').PAGE_PLUGIN){m='page';}else throw new Error('Invalid FBFeedLocation type.');var n=new (c('PluginOptin'))(m).addReturnParams({act:'like_'+j});c('DOMEventListener').add(l,'click',n.start.bind(n));},init:function i(j,k,l,m,n){var o=function r(s){if(s.type==='keypress')if(s.keyCode===c('Keys').RETURN||s.keyCode===c('Keys').SPACE){c('FormSubmit').send(n);}else return;c('FormSubmit').send(n);};c('DOMEventListener').add(k,'click',o);c('DOMEventListener').add(l,'click',o);c('DOMEventListener').add(k,'keypress',o);c('DOMEventListener').add(l,'keypress',o);var p=m.getAttribute('value')==='1';c('AsyncFormRequestUtils').subscribe(n,'send',function(r){var s=m.getAttribute('value')==='1';c('CSS').conditionShow(l,s);c('CSS').conditionShow(k,!s);c('Arbiter').inform('embeddedUfiToggle',{isLike:s,storyToken:j});m.setAttribute('value',s?'':'1');});c('AsyncFormRequestUtils').subscribe(n,'response',function(r){var s=r.response.payload;if(s&&!s.success){var t=s.isLike;c('CSS').conditionShow(k,t);c('CSS').conditionShow(l,!t);c('Arbiter').inform('revertLike',{isLike:t,storyToken:j});m.setAttribute('value',t?'1':'');}});var q=new (c('URI'))(window.location.search).getQueryData();if(p&&q.act==='like_'+j)c('FormSubmit').send(n);}};f.exports=h;}),null);
__d('DeferredComponent.react',['React','createCancelableFunction'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(l,m){'use strict';i.constructor.call(this,l,m);this.$DeferredComponent1=function(n){this.setState({ComponentClass:n},function(){this.props.onComponentLoad&&this.props.onComponentLoad(n);}.bind(this));}.bind(this);this.state={ComponentClass:null,cancelableModulesLoaded:c('createCancelableFunction')(this.$DeferredComponent1)};}k.prototype.componentWillMount=function(){'use strict';this.props.deferredComponent(this.state.cancelableModulesLoaded);};k.prototype.componentWillUnmount=function(){'use strict';this.state.cancelableModulesLoaded.cancel();};k.prototype.render=function(){'use strict';var l=this.state.ComponentClass;if(!l||this.props.deferredForcePlaceholder)return this.props.deferredPlaceholder;var m=this.props,n=m.deferredPlaceholder,o=m.deferredComponent,p=m.onComponentLoad,q=m.deferredForcePlaceholder,r=babelHelpers.objectWithoutProperties(m,['deferredPlaceholder','deferredComponent','onComponentLoad','deferredForcePlaceholder']);return c('React').createElement(l,r);};k.propTypes={deferredPlaceholder:j.element.isRequired,deferredComponent:j.func.isRequired,onComponentLoad:j.func,deferredForcePlaceholder:j.bool};f.exports=k;}),null);
__d('JSResource',['JSResourceReference'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function i(j){return new (c('JSResourceReference'))(j);};h.Reference=c('JSResourceReference');h.loadAll=c('JSResourceReference').loadAll;f.exports=h;}),null);
__d('BootloadedComponent.react',['DeferredComponent.react','JSResource','React'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.$BootloadedComponent1=function(q){c('JSResource').loadAll([this.props.bootloadLoader],q);}.bind(this),m;}k.prototype.render=function(){'use strict';var l=this.props,m=l.bootloadLoader,n=l.bootloadPlaceholder,o=l.bootloadForcePlaceholder,p=babelHelpers.objectWithoutProperties(l,['bootloadLoader','bootloadPlaceholder','bootloadForcePlaceholder']);return c('React').createElement(c('DeferredComponent.react'),babelHelpers['extends']({deferredPlaceholder:n,deferredComponent:this.$BootloadedComponent1,deferredForcePlaceholder:o},p));};f.exports=Object.assign(k,{propTypes:{bootloadPlaceholder:j.element.isRequired,bootloadLoader:j.instanceOf(c('JSResource').Reference).isRequired,bootloadForcePlaceholder:j.bool},create:function l(m){var n,o;n=babelHelpers.inherits(p,c('React').Component);o=n&&n.prototype;p.prototype.render=function(){'use strict';var q=this.props,r=q.bootloadLoader,s=babelHelpers.objectWithoutProperties(q,['bootloadLoader']);return (c('React').createElement(k,babelHelpers['extends']({bootloadLoader:m},s)));};function p(){'use strict';n.apply(this,arguments);}p.displayName='BootloadedComponent('+m.getModuleId()+')';return p;}});}),null);
__d('FbFeedAccessible',['csx','cx','fbt','invariant','AccessibilityConfig','Arbiter','ARIA','BootloadedComponent.react','CSS','DataAttributeUtils','DOMQuery','JSResource','LitestandMessages','React','ReactDOM','SubscriptionsHandler','ge','getOrCreateDOMID'],(function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l='Accessibility/StoriesRequested',m='Accessibility/StoriesLoaded',n='Accessibility/StoryContentInserted',o='Accessibility/SubstreamInserted',p=void 0,q=void 0,r={init:function s(t){p=t;if(c('AccessibilityConfig').a11yNewsfeedStoryEnumeration){var u=new (c('SubscriptionsHandler'))();u.addSubscriptions(c('Arbiter').subscribe(c('LitestandMessages').STORIES_REQUESTED,this._onStoriesRequested.bind(this)),c('Arbiter').subscribe(c('LitestandMessages').STORIES_INSERTED,this._onInsertedSubstream.bind(this)),c('Arbiter').subscribe(c('LitestandMessages').NEWER_STORIES_INSERTED,this._onInsertedSubstream.bind(this)),c('Arbiter').subscribe(m,this._processStoriesLoaded.bind(this)),c('Arbiter').subscribe(l,this._processStoriesRequested.bind(this)),c('Arbiter').subscribe(n,this._processStoryContentInserted.bind(this)),c('Arbiter').subscribe(o,this._processInsertedSubstream.bind(this)));this._enumerateStories();}},informStoryContentInserted:function s(t){c('Arbiter').inform(n,t);this.setAriaLabelledBy(t);},setAriaLabelledBy:function s(t){var u=c('ge')(t),v;if(u&&this._isStory(u)){if(u.getAttribute('aria-labelledby'))return;v=this._filterForElement(u,["._4gns","._5pbw",".timestampContent","._5pbx"]);if(v.length>0)u.setAttribute('aria-labelledby',v.map(function(w){return c('getOrCreateDOMID')(w);}).join(' '));}},_getStories:function s(t){return c('DOMQuery').scry(t||p,"._5jmm");},_onInsertedSubstream:function s(t,u){if(u&&u.substream_id)c('Arbiter').inform(o,u.substream_id);},_onStoriesRequested:function s(){c('Arbiter').inform(l);},_setEnumerationText:function s(t,u,v){var w=c('React').createElement(c('BootloadedComponent.react'),{bootloadLoader:c('JSResource')('FbFeedPager.react').__setRef('FbFeedAccessible'),bootloadPlaceholder:c('React').createElement('div',null),position:u,total:v,'aria-hidden':'true'});c('ReactDOM').render(w,t);},_enumerateStories:function s(){var t=this._getStories(p);q=t.length;t.forEach(function(u,v){this._enumerateStory(u,v+=1);}.bind(this));},_enumerateSubstream:function s(t){var u=this._getStories();q=u.length;var v=this._getStories(c('ge')(t)),w=v.length||0;for(var x=0;x<w;x++)this._registerStoryEnumerationPosition(v[x],q-w+(x+1),x+1);},_enumerateStory:function s(t,u){!this._isStory(t)?k(0):void 0;if(u>0){var v=c('DOMQuery').scry(t,"._4gns");if(v&&v[0])this._setEnumerationText(v[0],u,q);}},_processStoriesLoaded:function s(){c('ARIA').notify(j._("More stories loaded."));},_processStoriesRequested:function s(){c('ARIA').notify(j._("More stories requested."));},_processInsertedSubstream:function s(t,u){this._enumerateSubstream(u);this._enumerateStories();},_processStoryContentInserted:function s(t,u){var v=void 0,w=c('ge')(u);if(w)v=JSON.parse(c('DataAttributeUtils').getDataFt(w));if(v&&v.ordinal_position){var x=v.ordinal_position.split(':'),y=x[0],z=x[1];y=parseInt(y,10);z=parseInt(z,10);this._enumerateStory(w,y);if(z===1)c('Arbiter').inform(m);}},_registerStoryEnumerationPosition:function s(t,u,v){var w=JSON.parse(c('DataAttributeUtils').getDataFt(t));if(w){w.ordinal_position=u+':'+v;c('DataAttributeUtils').setDataFt(t,JSON.stringify(w));}},_isStory:function s(t){return c('CSS').matchesSelector(t,"._5jmm");},_filterForElement:function s(t,u){return u.map(function(v){return c('DOMQuery').scry(t||document,v)[0];}).filter(function(v){return !!v;});}};f.exports=r;}),null);