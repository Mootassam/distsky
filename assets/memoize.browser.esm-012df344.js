function ue(D){function z(t,r,s,o,e){for(var h=0,a=0,b=0,u=0,d,c,p=0,R=0,n,m=n=d=0,l=0,w=0,j=0,k=0,H=s.length,y=H-1,C,i="",f="",Y="",Z="",$;l<H;){if(c=s.charCodeAt(l),l===y&&a+u+b+h!==0&&(a!==0&&(c=a===47?10:47),u=b=h=0,H++,y++),a+u+b+h===0){if(l===y&&(0<w&&(i=i.replace(P,"")),0<i.trim().length)){switch(c){case 32:case 9:case 59:case 13:case 10:break;default:i+=s.charAt(l)}c=59}switch(c){case 123:for(i=i.trim(),d=i.charCodeAt(0),n=1,k=++l;l<H;){switch(c=s.charCodeAt(l)){case 123:n++;break;case 125:n--;break;case 47:switch(c=s.charCodeAt(l+1)){case 42:case 47:e:{for(m=l+1;m<y;++m)switch(s.charCodeAt(m)){case 47:if(c===42&&s.charCodeAt(m-1)===42&&l+2!==m){l=m+1;break e}break;case 10:if(c===47){l=m+1;break e}}l=m}}break;case 91:c++;case 40:c++;case 34:case 39:for(;l++<y&&s.charCodeAt(l)!==c;);}if(n===0)break;l++}switch(n=s.substring(k,l),d===0&&(d=(i=i.replace(ee,"").trim()).charCodeAt(0)),d){case 64:switch(0<w&&(i=i.replace(P,"")),c=i.charCodeAt(1),c){case 100:case 109:case 115:case 45:w=r;break;default:w=T}if(n=z(r,w,n,c,e+1),k=n.length,0<g&&(w=S(T,i,j),$=G(3,n,w,r,v,x,k,c,e,o),i=w.join(""),$!==void 0&&(k=(n=$.trim()).length)===0&&(c=0,n="")),0<k)switch(c){case 115:i=i.replace(ce,q);case 100:case 109:case 45:n=i+"{"+n+"}";break;case 107:i=i.replace(se,"$1 $2"),n=i+"{"+n+"}",n=A===1||A===2&&E("@"+n,3)?"@-webkit-"+n+"@"+n:"@"+n;break;default:n=i+n,o===112&&(n=(f+=n,""))}else n="";break;default:n=z(r,S(r,i,j),n,o,e+1)}Y+=n,n=j=w=m=d=0,i="",c=s.charCodeAt(++l);break;case 125:case 59:if(i=(0<w?i.replace(P,""):i).trim(),1<(k=i.length))switch(m===0&&(d=i.charCodeAt(0),d===45||96<d&&123>d)&&(k=(i=i.replace(" ",":")).length),0<g&&($=G(1,i,r,t,v,x,f.length,o,e,o))!==void 0&&(k=(i=$.trim()).length)===0&&(i="\0\0"),d=i.charCodeAt(0),c=i.charCodeAt(1),d){case 0:break;case 64:if(c===105||c===99){Z+=i+s.charAt(l);break}default:i.charCodeAt(k-1)!==58&&(f+=L(i,d,c,i.charCodeAt(2)))}j=w=m=d=0,i="",c=s.charCodeAt(++l)}}switch(c){case 13:case 10:a===47?a=0:1+d===0&&o!==107&&0<i.length&&(w=1,i+="\0"),0<g*J&&G(0,i,r,t,v,x,f.length,o,e,o),x=1,v++;break;case 59:case 125:if(a+u+b+h===0){x++;break}default:switch(x++,C=s.charAt(l),c){case 9:case 32:if(u+h+a===0)switch(p){case 44:case 58:case 9:case 32:C="";break;default:c!==32&&(C=" ")}break;case 0:C="\\0";break;case 12:C="\\f";break;case 11:C="\\v";break;case 38:u+a+h===0&&(w=j=1,C="\f"+C);break;case 108:if(u+a+h+O===0&&0<m)switch(l-m){case 2:p===112&&s.charCodeAt(l-3)===58&&(O=p);case 8:R===111&&(O=R)}break;case 58:u+a+h===0&&(m=l);break;case 44:a+b+u+h===0&&(w=1,C+="\r");break;case 34:case 39:a===0&&(u=u===c?0:u===0?c:u);break;case 91:u+a+b===0&&h++;break;case 93:u+a+b===0&&h--;break;case 41:u+a+h===0&&b--;break;case 40:if(u+a+h===0){if(d===0)switch(2*p+3*R){case 533:break;default:d=1}b++}break;case 64:a+b+u+h+m+n===0&&(n=1);break;case 42:case 47:if(!(0<u+h+b))switch(a){case 0:switch(2*c+3*s.charCodeAt(l+1)){case 235:a=47;break;case 220:k=l,a=42}break;case 42:c===47&&p===42&&k+2!==l&&(s.charCodeAt(k+2)===33&&(f+=s.substring(k,l+1)),C="",a=0)}}a===0&&(i+=C)}R=p,p=c,l++}if(k=f.length,0<k){if(w=r,0<g&&($=G(2,f,w,t,v,x,k,o,e,o),$!==void 0&&(f=$).length===0))return Z+f+Y;if(f=w.join(",")+"{"+f+"}",A*O!==0){switch(A!==2||E(f,2)||(O=0),O){case 111:f=f.replace(ie,":-moz-$1")+f;break;case 112:f=f.replace(I,"::-webkit-input-$1")+f.replace(I,"::-moz-$1")+f.replace(I,":-ms-input-$1")+f}O=0}}return Z+f+Y}function S(t,r,s){var o=r.trim().split(te);r=o;var e=o.length,h=t.length;switch(h){case 0:case 1:var a=0;for(t=h===0?"":t[0]+" ";a<e;++a)r[a]=_(t,r[a],s).trim();break;default:var b=a=0;for(r=[];a<e;++a)for(var u=0;u<h;++u)r[b++]=_(t[u]+" ",o[a],s).trim()}return r}function _(t,r,s){var o=r.charCodeAt(0);switch(33>o&&(o=(r=r.trim()).charCodeAt(0)),o){case 38:return r.replace(F,"$1"+t.trim());case 58:return t.trim()+r.replace(F,"$1"+t.trim());default:if(0<1*s&&0<r.indexOf("\f"))return r.replace(F,(t.charCodeAt(0)===58?"":"$1")+t.trim())}return t+r}function L(t,r,s,o){var e=t+";",h=2*r+3*s+4*o;if(h===944){t=e.indexOf(":",9)+1;var a=e.substring(t,e.length-1).trim();return a=e.substring(0,t).trim()+a+";",A===1||A===2&&E(a,1)?"-webkit-"+a+a:a}if(A===0||A===2&&!E(e,1))return e;switch(h){case 1015:return e.charCodeAt(10)===97?"-webkit-"+e+e:e;case 951:return e.charCodeAt(3)===116?"-webkit-"+e+e:e;case 963:return e.charCodeAt(5)===110?"-webkit-"+e+e:e;case 1009:if(e.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+e+e;case 978:return"-webkit-"+e+"-moz-"+e+e;case 1019:case 983:return"-webkit-"+e+"-moz-"+e+"-ms-"+e+e;case 883:if(e.charCodeAt(8)===45)return"-webkit-"+e+e;if(0<e.indexOf("image-set(",11))return e.replace(he,"$1-webkit-$2")+e;break;case 932:if(e.charCodeAt(4)===45)switch(e.charCodeAt(5)){case 103:return"-webkit-box-"+e.replace("-grow","")+"-webkit-"+e+"-ms-"+e.replace("grow","positive")+e;case 115:return"-webkit-"+e+"-ms-"+e.replace("shrink","negative")+e;case 98:return"-webkit-"+e+"-ms-"+e.replace("basis","preferred-size")+e}return"-webkit-"+e+"-ms-"+e+e;case 964:return"-webkit-"+e+"-ms-flex-"+e+e;case 1023:if(e.charCodeAt(8)!==99)break;return a=e.substring(e.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+a+"-webkit-"+e+"-ms-flex-pack"+a+e;case 1005:return ae.test(e)?e.replace(B,":-webkit-")+e.replace(B,":-moz-")+e:e;case 1e3:switch(a=e.substring(13).trim(),r=a.indexOf("-")+1,a.charCodeAt(0)+a.charCodeAt(r)){case 226:a=e.replace(Q,"tb");break;case 232:a=e.replace(Q,"tb-rl");break;case 220:a=e.replace(Q,"lr");break;default:return e}return"-webkit-"+e+"-ms-"+a+e;case 1017:if(e.indexOf("sticky",9)===-1)break;case 975:switch(r=(e=t).length-10,a=(e.charCodeAt(r)===33?e.substring(0,r):e).substring(t.indexOf(":",7)+1).trim(),h=a.charCodeAt(0)+(a.charCodeAt(7)|0)){case 203:if(111>a.charCodeAt(8))break;case 115:e=e.replace(a,"-webkit-"+a)+";"+e;break;case 207:case 102:e=e.replace(a,"-webkit-"+(102<h?"inline-":"")+"box")+";"+e.replace(a,"-webkit-"+a)+";"+e.replace(a,"-ms-"+a+"box")+";"+e}return e+";";case 938:if(e.charCodeAt(5)===45)switch(e.charCodeAt(6)){case 105:return a=e.replace("-items",""),"-webkit-"+e+"-webkit-box-"+a+"-ms-flex-"+a+e;case 115:return"-webkit-"+e+"-ms-flex-item-"+e.replace(K,"")+e;default:return"-webkit-"+e+"-ms-flex-line-pack"+e.replace("align-content","").replace(K,"")+e}break;case 973:case 989:if(e.charCodeAt(3)!==45||e.charCodeAt(4)===122)break;case 931:case 953:if(le.test(t)===!0)return(a=t.substring(t.indexOf(":")+1)).charCodeAt(0)===115?L(t.replace("stretch","fill-available"),r,s,o).replace(":fill-available",":stretch"):e.replace(a,"-webkit-"+a)+e.replace(a,"-moz-"+a.replace("fill-",""))+e;break;case 962:if(e="-webkit-"+e+(e.charCodeAt(5)===102?"-ms-"+e:"")+e,s+o===211&&e.charCodeAt(13)===105&&0<e.indexOf("transform",10))return e.substring(0,e.indexOf(";",27)+1).replace(re,"$1-webkit-$2")+e}return e}function E(t,r){var s=t.indexOf(r===1?":":"{"),o=t.substring(0,r!==3?s:10);return s=t.substring(s+1,t.length-1),V(r!==2?o:o.replace(ne,"$1"),s,r)}function q(t,r){var s=L(r,r.charCodeAt(0),r.charCodeAt(1),r.charCodeAt(2));return s!==r+";"?s.replace(oe," or ($1)").substring(4):"("+r+")"}function G(t,r,s,o,e,h,a,b,u,d){for(var c=0,p=r,R;c<g;++c)switch(R=U[c].call(W,t,p,s,o,e,h,a,b,u,d)){case void 0:case!1:case!0:case null:break;default:p=R}if(p!==r)return p}function M(t){switch(t){case void 0:case null:g=U.length=0;break;default:if(typeof t=="function")U[g++]=t;else if(typeof t=="object")for(var r=0,s=t.length;r<s;++r)M(t[r]);else J=!!t|0}return M}function N(t){return t=t.prefix,t!==void 0&&(V=null,t?typeof t!="function"?A=1:(A=2,V=t):A=0),N}function W(t,r){var s=t;if(33>s.charCodeAt(0)&&(s=s.trim()),X=s,s=[X],0<g){var o=G(-1,r,s,s,v,x,0,0,0,0);o!==void 0&&typeof o=="string"&&(r=o)}var e=z(T,s,r,0,0);return 0<g&&(o=G(-2,e,s,s,v,x,e.length,0,0,0),o!==void 0&&(e=o)),X="",O=0,x=v=1,e}var ee=/^\0+/g,P=/[\0\r\f]/g,B=/: */g,ae=/zoo|gra/,re=/([,: ])(transform)/g,te=/,\r+?/g,F=/([\t\r\n ])*\f?&/g,se=/@(k\w+)\s*(\S*)\s*/,I=/::(place)/g,ie=/:(read-only)/g,Q=/[svh]\w+-[tblr]{2}/,ce=/\(\s*(.*)\s*\)/g,oe=/([\s\S]*?);/g,K=/-self|flex-/g,ne=/[^]*?(:[rp][el]a[\w-]+)[^]*/,le=/stretch|:\s*\w+\-(?:conte|avail)/,he=/([^-])(image-set\()/,x=1,v=1,O=0,A=1,T=[],U=[],g=0,V=null,J=0,X="";return W.use=M,W.set=N,D!==void 0&&N(D),W}var fe={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function de(D){var z={};return function(S){return z[S]===void 0&&(z[S]=D(S)),z[S]}}export{de as m,ue as s,fe as u};