import{A as ia,V as Z,C as N,a as Lt,S as Vt,b as Pi,c as is,U as sa,d as Ei,e as C,_ as d,s as w,f as y,g as X,h as T,R as oe,P as ge,M as U,i as Pe,j as Ve,k as Ce,l as ve,E as Ae,H as Be,m as Oe,n as P,o as Ne,p as _e,q as ze,B as De,r as pe,t as he,u as ke,v as ne,w as xe,x as V,y as Se,z as fe,D as ra,F as aa,T as Di,G as Rt,I as Kt,J as na,K as oa,Q as ss,L as fa,N as rs,O as la,W as Ci,X as Ai,Y as as,Z as ti,$ as ns,a0 as _r,a1 as ha,a2 as ua,a3 as ca,a4 as da,a5 as ma}from"./babylon-DPIanaRA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();const os=40,ga=1,Et={x:8,y:0,z:0},Fi={latitudeDeg:48.14861,longitudeDeg:11.56775,label:"München"},fs={x:-2,z:-16},K={defaultSpeedMps:4,minSpeedMps:1,maxSpeedMps:12,cruiseAltitudeM:8,homeHoverM:1,hoverPauseMs:500,radiusM:.4},Ke={defaultCount:3,minCount:1,maxCount:6,homeSpacingM:2},ni={formationRadiusM:1.3,slotToleranceM:.4,gatherStackSpacingM:1.5,carrierServoFactor:1.4},pr="lanes",ls=1,va=.02,Xe={laneSpacingM:3.8,altitudeConflictM:1,neighbourDistM:5,maxNeighbours:6,timeHorizonS:2,stuckTimeoutMs:1200,stuckSpeedFraction:.25,nudgeFraction:.6},dt={sampleStepS:.25,horizonS:120,timeBufferS:1.5},Bt={unplaced:"#6b7280",claimed:"#3b82f6","in-transit":"#f59e0b",placed:"#22c55e"},_a="#38bdf8",pa="#e2e8f0",xr="#ef4444",mt={origin:{x:-15,z:-10.5},columns:4,columnSpacingM:7,rowSpacingM:7};function $(t,e,i){return{x:t,y:e,z:i}}function xa(t,e){return{x:t.x-e.x,y:t.y-e.y,z:t.z-e.z}}function Sa(t){return Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)}function nt(t,e){return Sa(xa(t,e))}function Xi(t,e,i){const a=Math.min(1,Math.max(0,i));return{x:t.x+(e.x-t.x)*a,y:t.y+(e.y-t.y)*a,z:t.z+(e.z-t.z)*a}}const J=$(Et.x,Et.y,Et.z),At=5,ui=4,Te=2.5,rt=.2,Nt=.2,hs=.12,us=ui/2-rt/2,cs=At/2-rt/2,ds=ui-2*rt;function Ea(t,e){const i=t%mt.columns,a=Math.floor(t/mt.columns);return $(mt.origin.x+a*mt.rowSpacingM,e/2,mt.origin.z+i*mt.columnSpacingM)}const Ta=["wall-n","wall-s","wall-e","wall-w"],Ma=["column-1","column-2"],it=J.y+Nt,ya=[{id:"floor-slab",type:"floor-slab",dimensions:$(At,Nt,ui),targetPosition:$(J.x,J.y+Nt/2,J.z),dependencies:[],requiredCarriers:3},{id:"wall-n",type:"wall",dimensions:$(At,Te,rt),targetPosition:$(J.x,it+Te/2,J.z+us),dependencies:["floor-slab"]},{id:"wall-s",type:"wall",dimensions:$(At,Te,rt),targetPosition:$(J.x,it+Te/2,J.z-us),dependencies:["floor-slab"]},{id:"wall-e",type:"wall",dimensions:$(rt,Te,ds),targetPosition:$(J.x+cs,it+Te/2,J.z),dependencies:["floor-slab"]},{id:"wall-w",type:"wall",dimensions:$(rt,Te,ds),targetPosition:$(J.x-cs,it+Te/2,J.z),dependencies:["floor-slab"]},{id:"column-1",type:"column",dimensions:$(.3,Te,.3),targetPosition:$(J.x-1.5,it+Te/2,J.z),dependencies:["floor-slab"]},{id:"column-2",type:"column",dimensions:$(.3,Te,.3),targetPosition:$(J.x+1.5,it+Te/2,J.z),dependencies:["floor-slab"]},{id:"roof",type:"roof",dimensions:$(At+2*hs,Nt,ui+2*hs),targetPosition:$(J.x,it+Te+Nt/2,J.z),dependencies:[...Ta,...Ma],requiredCarriers:3}];function Pa(){return ya.map((t,e)=>({id:t.id,type:t.type,sequenceIndex:e,dependencies:t.dependencies,requiredCarriers:t.requiredCarriers??1,depotPosition:Ea(e,t.dimensions.y),targetPosition:t.targetPosition,targetRotation:t.targetRotation??$(0,0,0),dimensions:t.dimensions,state:"unplaced"}))}function Sr(t,e){const i=Math.max(0,e-1)*Ke.homeSpacingM;return{x:fs.x-i/2+t*Ke.homeSpacingM,y:K.homeHoverM,z:fs.z}}function Ca(t,e){const i=new ia("main-camera",-Math.PI/3,Math.PI/3,44,new Z(-2,1.5,0),t);return i.attachControl(e,!0),i.lowerRadiusLimit=8,i.upperRadiusLimit=70,i.lowerBetaLimit=.1,i.upperBetaLimit=Math.PI/2.1,i.wheelDeltaPercentage=.01,i.panningSensibility=80,i.useNaturalPinchZoom=!0,i}function zt(t){return new Z(t.x,t.y,t.z)}function Aa(t){return{x:t.x,y:t.y,z:t.z}}function ot(t){return N.FromHexString(t)}const ms=.18,Na=.55;class wa{constructor(e,i){this.scene=e;for(const a of i){const s=Lt(`component:${a.id}`,{width:a.dimensions.x,height:a.dimensions.y,depth:a.dimensions.z},e);s.position=zt(a.depotPosition),s.rotation=zt(a.targetRotation),s.metadata={componentId:a.id};const r=new Vt(`component-mat:${a.id}`,e);r.specularColor=N.Black(),s.material=r,this.meshes.set(a.id,s),this.materials.set(a.id,r),this.applyState(a)}}meshes=new Map;materials=new Map;clashing=new Set;getMesh(e){return this.meshes.get(e)}allMeshes(){return[...this.meshes.values()]}applyState(e){const i=this.materials.get(e.id);if(!i)return;const a=ot(Bt[e.state]);i.diffuseColor=a,i.emissiveColor=a.scale(ms)}setClash(e,i){const a=ot(xr);for(const s of i){const r=s.id,n=e.has(r),o=this.clashing.has(r);if(n===o)continue;const f=this.materials.get(r);f&&(n?(this.scene.stopAnimation(f),f.diffuseColor=a,f.emissiveColor=a.scale(.6),this.clashing.add(r)):(this.clashing.delete(r),this.applyState(s)))}}flashPlacement(e){const i=this.materials.get(e.id);if(!i)return;const a=ot(Bt[e.state]).scale(ms),s=N.Lerp(a,N.White(),.85),r=60,n=Math.round(r*Na),o=new Pi(`placement-flash:${e.id}`,"emissiveColor",r,Pi.ANIMATIONTYPE_COLOR3,Pi.ANIMATIONLOOPMODE_CONSTANT);o.setKeys([{frame:0,value:s},{frame:n,value:a}]),this.scene.beginDirectAnimation(i,[o],0,n,!1)}resetAll(e){this.clashing.clear();for(const i of e){const a=this.materials.get(i.id);a&&this.scene.stopAnimation(a);const s=this.meshes.get(i.id);s&&(s.position.set(i.depotPosition.x,i.depotPosition.y,i.depotPosition.z),s.rotation.set(i.targetRotation.x,i.targetRotation.y,i.targetRotation.z)),this.applyState(i)}}dispose(){for(const e of this.materials.values())this.scene.stopAnimation(e),e.dispose();for(const e of this.meshes.values())e.dispose();this.meshes.clear(),this.materials.clear()}}const ee=K.radiusM*2,gs=ee*.88,Ia=ee*.42,ba=22,La="#0f172a";class Ra{mesh;frameMat;rotorMat;frameColor;rotorColor;clashColor;rotors=[];spinObserver;scene;clashing=!1;constructor(e,i,a=0){this.scene=e,this.frameMat=new Vt(`drone-frame-${a}`,e),this.frameColor=ot(pa),this.clashColor=ot(xr),this.frameMat.diffuseColor=this.frameColor,this.frameMat.emissiveColor=this.frameColor.scale(.5),this.rotorMat=new Vt(`drone-rotor-${a}`,e),this.rotorColor=ot(La),this.rotorMat.diffuseColor=this.rotorColor,this.rotorMat.emissiveColor=this.rotorColor.scale(.4),this.mesh=Lt(`drone-${a}`,{width:ee*.42,height:ee*.16,depth:ee*.42},e),this.mesh.material=this.frameMat,this.mesh.position.set(i.x,i.y,i.z);for(const r of[Math.PI/4,-Math.PI/4]){const n=Lt(`drone-${a}-arm`,{width:gs,height:ee*.06,depth:ee*.09},e);n.material=this.frameMat,n.rotation.y=r,n.parent=this.mesh}const s=gs/2*Math.SQRT1_2;for(const[r,n]of[[1,1],[1,-1],[-1,1],[-1,-1]]){const o=is(`drone-${a}-motor`,{diameter:ee*.1,height:ee*.12},e);o.material=this.rotorMat,o.position.set(r*s,ee*.08,n*s),o.parent=this.mesh;const f=is(`drone-${a}-rotor`,{diameter:Ia,height:ee*.02},e);f.material=this.rotorMat,f.position.set(r*s,ee*.16,n*s),f.parent=this.mesh,this.rotors.push(f)}for(const r of[-1,1]){const n=Lt(`drone-${a}-skid`,{width:ee*.06,height:ee*.04,depth:ee*.5},e);n.material=this.frameMat,n.position.set(r*ee*.18,-ee*.16,0),n.parent=this.mesh}this.spinObserver=e.onBeforeRenderObservable.add(()=>{const r=e.getEngine().getDeltaTime()/1e3,n=ba*r;for(const o of this.rotors)o.rotation.y+=n})}setClash(e){if(e===this.clashing)return;this.clashing=e;const i=e?this.clashColor:this.frameColor;this.frameMat.diffuseColor=i,this.frameMat.emissiveColor=i.scale(e?.7:.5);const a=e?this.clashColor:this.rotorColor;this.rotorMat.diffuseColor=a,this.rotorMat.emissiveColor=a.scale(e?.7:.4)}setVisible(e){this.mesh.setEnabled(e)}getPosition(){return Aa(this.mesh.position)}setPosition(e){this.mesh.position.set(e.x,e.y,e.z)}dispose(){this.scene.onBeforeRenderObservable.remove(this.spinObserver),this.frameMat.dispose(),this.rotorMat.dispose(),this.mesh.dispose()}}class Oa{camera;constructor(e){this.camera=new sa("drone-camera",new Z(0,5,0),e),this.camera.minZ=.05,this.camera.fov=1.2}follow(e,i){this.camera.position.set(e.x,e.y+.4,e.z),this.camera.setTarget(zt(i))}dispose(){this.camera.dispose()}}function Da(t,e){const i=ot(_a),a=new Vt("ghost-mat",t);a.diffuseColor=i,a.emissiveColor=i.scale(.4),a.alpha=.06,a.disableLighting=!0,a.backFaceCulling=!1;const s=new Ei(i.r,i.g,i.b,.9),r=e.map(n=>{const o=Lt(`ghost:${n.id}`,{width:n.dimensions.x,height:n.dimensions.y,depth:n.dimensions.z},t);return o.position=zt(n.targetPosition),o.rotation=zt(n.targetRotation),o.material=a,o.isPickable=!1,o.enableEdgesRendering(),o.edgesWidth=2,o.edgesColor=s,o});return{meshes:r,setVisible(n){for(const o of r)o.setEnabled(n)},dispose(){for(const n of r)n.dispose();a.dispose()}}}const vs="cellPixelShader",Fa=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
vec3 computeCustomDiffuseLighting(lightingInfo info,vec3 diffuseBase,float shadow)
{diffuseBase=info.diffuse*shadow;
#ifdef CELLBASIC
float level=1.0;if (info.ndl<0.5)
level=0.5;diffuseBase.rgb*vec3(level,level,level);
#else
float ToonThresholds[4];ToonThresholds[0]=0.95;ToonThresholds[1]=0.5;ToonThresholds[2]=0.2;ToonThresholds[3]=0.03;float ToonBrightnessLevels[5];ToonBrightnessLevels[0]=1.0;ToonBrightnessLevels[1]=0.8;ToonBrightnessLevels[2]=0.6;ToonBrightnessLevels[3]=0.35;ToonBrightnessLevels[4]=0.2;if (info.ndl>ToonThresholds[0])
{diffuseBase.rgb*=ToonBrightnessLevels[0];}
else if (info.ndl>ToonThresholds[1])
{diffuseBase.rgb*=ToonBrightnessLevels[1];}
else if (info.ndl>ToonThresholds[2])
{diffuseBase.rgb*=ToonBrightnessLevels[2];}
else if (info.ndl>ToonThresholds[3])
{diffuseBase.rgb*=ToonBrightnessLevels[3];}
else
{diffuseBase.rgb*=ToonBrightnessLevels[4];}
#endif
return max(diffuseBase,vec3(0.2));}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef DIFFUSE
baseColor=texture2D(diffuseSampler,vDiffuseUV);
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef VERTEXCOLOR
baseColor.rgb*=vColor.rgb;
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
lightingInfo info;vec3 diffuseBase=vec3(0.,0.,0.);float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif 
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;C.ShadersStore[vs]||(C.ShadersStore[vs]=Fa);const _s="cellVertexShader",Ga=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
vec4 colorUpdated=color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;C.ShadersStore[_s]||(C.ShadersStore[_s]=Ga);class Ua extends Se{constructor(){super(),this.DIFFUSE=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.POINTSIZE=!1,this.FOG=!1,this.NORMAL=!1,this.UV1=!1,this.UV2=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.NDOTL=!0,this.CUSTOMUSERLIGHTING=!0,this.CELLBASIC=!0,this.DEPTHPREPASS=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.LOGARITHMICDEPTH=!1,this.AREALIGHTSUPPORTED=!0,this.AREALIGHTNOROUGHTNESS=!0,this.rebuild()}}class ye extends ge{constructor(e,i){super(e,i),this.diffuseColor=new N(1,1,1),this._computeHighLevel=!1,this._disableLighting=!1,this._maxSimultaneousLights=4}needAlphaBlending(){return this.alpha<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(e,i,a){const s=i._drawWrapper;if(this.isFrozen&&s.effect&&s._wasPreviouslyReady&&s._wasPreviouslyUsingInstances===a)return!0;i.materialDefines||(i.materialDefines=new Ua);const r=i.materialDefines,n=this.getScene();if(this._isReadyForSubMesh(i))return!0;const o=n.getEngine();if(r._areTexturesDirty&&(r._needUVs=!1,n.texturesEnabled&&this._diffuseTexture&&U.DiffuseTextureEnabled))if(this._diffuseTexture.isReady())r._needUVs=!0,r.DIFFUSE=!0;else return!1;if(r.CELLBASIC=!this.computeHighLevel,Pe(e,n,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this.needAlphaTestingForMesh(e),r),r._needNormals=Ve(n,e,r,!1,this._maxSimultaneousLights,this._disableLighting),Ce(n,o,this,r,!!a),ve(e,r,!0,!0),r.isDirty){r.markAsProcessed(),n.resetCachedMaterial();const f=new Ae;r.FOG&&f.addFallback(1,"FOG"),Be(r,f,this.maxSimultaneousLights),r.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e),r.IMAGEPROCESSINGPOSTPROCESS=n.imageProcessingConfiguration.applyByPostProcess;const l=[P.PositionKind];r.NORMAL&&l.push(P.NormalKind),r.UV1&&l.push(P.UVKind),r.UV2&&l.push(P.UV2Kind),r.VERTEXCOLOR&&l.push(P.ColorKind),Oe(l,e,r,f),Ne(l,r);const c="cell",u=r.toString(),h=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","diffuseMatrix","logarithmicDepthConstant"],m=["diffuseSampler","areaLightsLTC1Sampler","areaLightsLTC2Sampler"],g=[];_e(h),ze({uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:r,maxSimultaneousLights:this.maxSimultaneousLights}),i.setEffect(n.getEngine().createEffect(c,{attributes:l,uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights-1}},o),r,this._materialContext)}if(r.AREALIGHTUSED){for(let f=0;f<e.lightSources.length;f++)if(!e.lightSources[f]._isReady())return!1}return!i.effect||!i.effect.isReady()?!1:(r._renderId=n.getRenderId(),s._wasPreviouslyReady=!0,s._wasPreviouslyUsingInstances=!!a,!0)}bindForSubMesh(e,i,a){const s=this.getScene(),r=a.materialDefines;if(!r)return;const n=a.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),De(i,this._activeEffect),this._mustRebind(s,n,a)&&(this._diffuseTexture&&U.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this._diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this._diffuseTexture.getTextureMatrix())),pe(this._activeEffect,this,s),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&he(r,n,s),s.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*i.visibility),s.lightsEnabled&&!this.disableLighting&&ke(s,i,this._activeEffect,r,this._maxSimultaneousLights),s.fogEnabled&&i.applyFog&&s.fogMode!==ne.FOGMODE_NONE&&this._activeEffect.setMatrix("view",s.getViewMatrix()),xe(s,i,this._activeEffect),this._afterBind(i,this._activeEffect,a))}getAnimatables(){const e=[];return this._diffuseTexture&&this._diffuseTexture.animations&&this._diffuseTexture.animations.length>0&&e.push(this._diffuseTexture),e}getActiveTextures(){const e=super.getActiveTextures();return this._diffuseTexture&&e.push(this._diffuseTexture),e}hasTexture(e){return super.hasTexture(e)?!0:this._diffuseTexture===e}dispose(e){this._diffuseTexture&&this._diffuseTexture.dispose(),super.dispose(e)}getClassName(){return"CellMaterial"}clone(e){return V.Clone(()=>new ye(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.CellMaterial",e}static Parse(e,i,a){return V.Parse(()=>new ye(e.name,i),e,i,a)}}d([w("diffuseTexture")],ye.prototype,"_diffuseTexture",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],ye.prototype,"diffuseTexture",void 0);d([X("diffuse")],ye.prototype,"diffuseColor",void 0);d([T("computeHighLevel")],ye.prototype,"_computeHighLevel",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],ye.prototype,"computeHighLevel",void 0);d([T("disableLighting")],ye.prototype,"_disableLighting",void 0);d([y("_markAllSubMeshesAsLightsDirty")],ye.prototype,"disableLighting",void 0);d([T("maxSimultaneousLights")],ye.prototype,"_maxSimultaneousLights",void 0);d([y("_markAllSubMeshesAsLightsDirty")],ye.prototype,"maxSimultaneousLights",void 0);oe("BABYLON.CellMaterial",ye);class Va{constructor(){}}class kt extends Vt{AttachAfterBind(e,i){if(this._newUniformInstances)for(const a in this._newUniformInstances){const s=a.toString().split("-");s[0]=="vec2"?i.setVector2(s[1],this._newUniformInstances[a]):s[0]=="vec3"?this._newUniformInstances[a]instanceof N?i.setColor3(s[1],this._newUniformInstances[a]):i.setVector3(s[1],this._newUniformInstances[a]):s[0]=="vec4"?(this._newUniformInstances[a]instanceof Ei?i.setDirectColor4(s[1],this._newUniformInstances[a]):i.setVector4(s[1],this._newUniformInstances[a]),i.setVector4(s[1],this._newUniformInstances[a])):s[0]=="mat4"?i.setMatrix(s[1],this._newUniformInstances[a]):s[0]=="float"&&i.setFloat(s[1],this._newUniformInstances[a])}if(this._newSamplerInstances)for(const a in this._newSamplerInstances){const s=a.toString().split("-");s[0]=="sampler2D"&&this._newSamplerInstances[a].isReady&&this._newSamplerInstances[a].isReady()&&i.setTexture(s[1],this._newSamplerInstances[a])}}ReviewUniform(e,i){if(e=="uniform"&&this._newUniforms)for(let a=0;a<this._newUniforms.length;a++)this._customUniform[a].indexOf("sampler")==-1&&i.push(this._newUniforms[a].replace(/\[\d*\]/g,""));if(e=="sampler"&&this._newUniforms)for(let a=0;a<this._newUniforms.length;a++)this._customUniform[a].indexOf("sampler")!=-1&&i.push(this._newUniforms[a].replace(/\[\d*\]/g,""));return i}Builder(e,i,a,s,r,n){n&&this._customAttributes&&this._customAttributes.length>0&&n.push(...this._customAttributes),this.ReviewUniform("uniform",i),this.ReviewUniform("sampler",s);const o=this._createdShaderName;return fe.ShadersStore[o+"VertexShader"]&&fe.ShadersStore[o+"PixelShader"]||(fe.ShadersStore[o+"VertexShader"]=this._injectCustomCode(this.VertexShader,"vertex"),fe.ShadersStore[o+"PixelShader"]=this._injectCustomCode(this.FragmentShader,"fragment")),o}_injectCustomCode(e,i){const a=this._getCustomCode(i);for(const s in a){const r=a[s];if(r&&r.length>0){const n="#define "+s;e=e.replace(n,`
`+r+`
`+n)}}return e}_getCustomCode(e){return e==="vertex"?{CUSTOM_VERTEX_BEGIN:this.CustomParts.Vertex_Begin,CUSTOM_VERTEX_DEFINITIONS:(this._customUniform?.join(`
`)||"")+(this.CustomParts.Vertex_Definitions||""),CUSTOM_VERTEX_MAIN_BEGIN:this.CustomParts.Vertex_MainBegin,CUSTOM_VERTEX_UPDATE_POSITION:this.CustomParts.Vertex_Before_PositionUpdated,CUSTOM_VERTEX_UPDATE_NORMAL:this.CustomParts.Vertex_Before_NormalUpdated,CUSTOM_VERTEX_MAIN_END:this.CustomParts.Vertex_MainEnd,CUSTOM_VERTEX_UPDATE_WORLDPOS:this.CustomParts.Vertex_After_WorldPosComputed}:{CUSTOM_FRAGMENT_BEGIN:this.CustomParts.Fragment_Begin,CUSTOM_FRAGMENT_DEFINITIONS:(this._customUniform?.join(`
`)||"")+(this.CustomParts.Fragment_Definitions||""),CUSTOM_FRAGMENT_MAIN_BEGIN:this.CustomParts.Fragment_MainBegin,CUSTOM_FRAGMENT_UPDATE_DIFFUSE:this.CustomParts.Fragment_Custom_Diffuse,CUSTOM_FRAGMENT_UPDATE_ALPHA:this.CustomParts.Fragment_Custom_Alpha,CUSTOM_FRAGMENT_BEFORE_LIGHTS:this.CustomParts.Fragment_Before_Lights,CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR:this.CustomParts.Fragment_Before_FragColor,CUSTOM_FRAGMENT_MAIN_END:this.CustomParts.Fragment_MainEnd,CUSTOM_FRAGMENT_BEFORE_FOG:this.CustomParts.Fragment_Before_Fog}}constructor(e,i){super(e,i,!0),this.CustomParts=new Va,this.customShaderNameResolve=this.Builder,this.FragmentShader=fe.ShadersStore.defaultPixelShader,this.VertexShader=fe.ShadersStore.defaultVertexShader,kt.ShaderIndexer++,this._createdShaderName="custom_"+kt.ShaderIndexer}_afterBind(e,i=null,a){if(i){this.AttachAfterBind(e,i);try{super._afterBind(e,i,a)}catch{}}}AddUniform(e,i,a){return this._customUniform||(this._customUniform=new Array,this._newUniforms=new Array,this._newSamplerInstances={},this._newUniformInstances={}),a&&(i.indexOf("sampler")!=-1?this._newSamplerInstances[i+"-"+e]=a:this._newUniformInstances[i+"-"+e]=a),this._customUniform.push("uniform "+i+" "+e+";"),this._newUniforms.push(e),this}AddAttribute(e){return this._customAttributes||(this._customAttributes=[]),this._customAttributes.push(e),this}Fragment_Begin(e){return this.CustomParts.Fragment_Begin=e,this}Fragment_Definitions(e){return this.CustomParts.Fragment_Definitions=e,this}Fragment_MainBegin(e){return this.CustomParts.Fragment_MainBegin=e,this}Fragment_MainEnd(e){return this.CustomParts.Fragment_MainEnd=e,this}Fragment_Custom_Diffuse(e){return this.CustomParts.Fragment_Custom_Diffuse=e.replace("result","diffuseColor"),this}Fragment_Custom_Alpha(e){return this.CustomParts.Fragment_Custom_Alpha=e.replace("result","alpha"),this}Fragment_Before_Lights(e){return this.CustomParts.Fragment_Before_Lights=e,this}Fragment_Before_Fog(e){return this.CustomParts.Fragment_Before_Fog=e,this}Fragment_Before_FragColor(e){return this.CustomParts.Fragment_Before_FragColor=e.replace("result","color"),this}Vertex_Begin(e){return this.CustomParts.Vertex_Begin=e,this}Vertex_Definitions(e){return this.CustomParts.Vertex_Definitions=e,this}Vertex_MainBegin(e){return this.CustomParts.Vertex_MainBegin=e,this}Vertex_Before_PositionUpdated(e){return this.CustomParts.Vertex_Before_PositionUpdated=e.replace("result","positionUpdated"),this}Vertex_Before_NormalUpdated(e){return this.CustomParts.Vertex_Before_NormalUpdated=e.replace("result","normalUpdated"),this}Vertex_After_WorldPosComputed(e){return this.CustomParts.Vertex_After_WorldPosComputed=e,this}Vertex_MainEnd(e){return this.CustomParts.Vertex_MainEnd=e,this}}kt.ShaderIndexer=1;oe("BABYLON.CustomMaterial",kt);class Ba{constructor(){}}class Ht extends ra{AttachAfterBind(e,i){if(this._newUniformInstances)for(const a in this._newUniformInstances){const s=a.toString().split("-");s[0]=="vec2"?i.setVector2(s[1],this._newUniformInstances[a]):s[0]=="vec3"?this._newUniformInstances[a]instanceof N?i.setColor3(s[1],this._newUniformInstances[a]):i.setVector3(s[1],this._newUniformInstances[a]):s[0]=="vec4"?(this._newUniformInstances[a]instanceof Ei?i.setDirectColor4(s[1],this._newUniformInstances[a]):i.setVector4(s[1],this._newUniformInstances[a]),i.setVector4(s[1],this._newUniformInstances[a])):s[0]=="mat4"?i.setMatrix(s[1],this._newUniformInstances[a]):s[0]=="float"&&i.setFloat(s[1],this._newUniformInstances[a])}if(this._newSamplerInstances)for(const a in this._newSamplerInstances){const s=a.toString().split("-");s[0]=="sampler2D"&&this._newSamplerInstances[a].isReady&&this._newSamplerInstances[a].isReady()&&i.setTexture(s[1],this._newSamplerInstances[a])}}ReviewUniform(e,i){if(e=="uniform"&&this._newUniforms)for(let a=0;a<this._newUniforms.length;a++)this._customUniform[a].indexOf("sampler")==-1&&i.push(this._newUniforms[a].replace(/\[\d*\]/g,""));if(e=="sampler"&&this._newUniforms)for(let a=0;a<this._newUniforms.length;a++)this._customUniform[a].indexOf("sampler")!=-1&&i.push(this._newUniforms[a].replace(/\[\d*\]/g,""));return i}Builder(e,i,a,s,r,n,o){if(o){const l=o.processFinalCode;o.processFinalCode=(c,u)=>{if(c==="vertex")return l?l(c,u):u;const h=new aa(u);return h.inlineToken="#define pbr_inline",h.processCode(),l?l(c,h.code):h.code}}n&&this._customAttributes&&this._customAttributes.length>0&&n.push(...this._customAttributes),this.ReviewUniform("uniform",i),this.ReviewUniform("sampler",s);const f=this._createdShaderName;return fe.ShadersStore[f+"VertexShader"]&&fe.ShadersStore[f+"PixelShader"]||(fe.ShadersStore[f+"VertexShader"]=this._injectCustomCode(this.VertexShader,"vertex"),fe.ShadersStore[f+"PixelShader"]=this._injectCustomCode(this.FragmentShader,"fragment")),f}_injectCustomCode(e,i){const a=this._getCustomCode(i);for(const s in a){const r=a[s];if(r&&r.length>0){const n="#define "+s;e=e.replace(n,`
`+r+`
`+n)}}return e}_getCustomCode(e){return e==="vertex"?{CUSTOM_VERTEX_BEGIN:this.CustomParts.Vertex_Begin,CUSTOM_VERTEX_DEFINITIONS:(this._customUniform?.join(`
`)||"")+(this.CustomParts.Vertex_Definitions||""),CUSTOM_VERTEX_MAIN_BEGIN:this.CustomParts.Vertex_MainBegin,CUSTOM_VERTEX_UPDATE_POSITION:this.CustomParts.Vertex_Before_PositionUpdated,CUSTOM_VERTEX_UPDATE_NORMAL:this.CustomParts.Vertex_Before_NormalUpdated,CUSTOM_VERTEX_MAIN_END:this.CustomParts.Vertex_MainEnd,CUSTOM_VERTEX_UPDATE_WORLDPOS:this.CustomParts.Vertex_After_WorldPosComputed}:{CUSTOM_FRAGMENT_BEGIN:this.CustomParts.Fragment_Begin,CUSTOM_FRAGMENT_MAIN_BEGIN:this.CustomParts.Fragment_MainBegin,CUSTOM_FRAGMENT_DEFINITIONS:(this._customUniform?.join(`
`)||"")+(this.CustomParts.Fragment_Definitions||""),CUSTOM_FRAGMENT_UPDATE_ALBEDO:this.CustomParts.Fragment_Custom_Albedo,CUSTOM_FRAGMENT_UPDATE_ALPHA:this.CustomParts.Fragment_Custom_Alpha,CUSTOM_FRAGMENT_BEFORE_LIGHTS:this.CustomParts.Fragment_Before_Lights,CUSTOM_FRAGMENT_UPDATE_METALLICROUGHNESS:this.CustomParts.Fragment_Custom_MetallicRoughness,CUSTOM_FRAGMENT_UPDATE_MICROSURFACE:this.CustomParts.Fragment_Custom_MicroSurface,CUSTOM_FRAGMENT_BEFORE_FINALCOLORCOMPOSITION:this.CustomParts.Fragment_Before_FinalColorComposition,CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR:this.CustomParts.Fragment_Before_FragColor,CUSTOM_FRAGMENT_MAIN_END:this.CustomParts.Fragment_MainEnd,CUSTOM_FRAGMENT_BEFORE_FOG:this.CustomParts.Fragment_Before_Fog}}constructor(e,i){super(e,i,!0),this.CustomParts=new Ba,this.customShaderNameResolve=this.Builder,this.FragmentShader=fe.ShadersStore.pbrPixelShader,this.VertexShader=fe.ShadersStore.pbrVertexShader,this.FragmentShader=this.FragmentShader.replace(/#include<pbrBlockAlbedoOpacity>/g,fe.IncludesShadersStore.pbrBlockAlbedoOpacity),this.FragmentShader=this.FragmentShader.replace(/#include<pbrBlockReflectivity>/g,fe.IncludesShadersStore.pbrBlockReflectivity),this.FragmentShader=this.FragmentShader.replace(/#include<pbrBlockFinalColorComposition>/g,fe.IncludesShadersStore.pbrBlockFinalColorComposition),Ht.ShaderIndexer++,this._createdShaderName="custompbr_"+Ht.ShaderIndexer}_afterBind(e,i=null,a){if(i){this.AttachAfterBind(e,i);try{super._afterBind(e,i,a)}catch{}}}AddUniform(e,i,a){return this._customUniform||(this._customUniform=new Array,this._newUniforms=new Array,this._newSamplerInstances={},this._newUniformInstances={}),a&&(i.indexOf("sampler")!=-1?this._newSamplerInstances[i+"-"+e]=a:this._newUniformInstances[i+"-"+e]=a),this._customUniform.push("uniform "+i+" "+e+";"),this._newUniforms.push(e),this}AddAttribute(e){return this._customAttributes||(this._customAttributes=[]),this._customAttributes.push(e),this}Fragment_Begin(e){return this.CustomParts.Fragment_Begin=e,this}Fragment_Definitions(e){return this.CustomParts.Fragment_Definitions=e,this}Fragment_MainBegin(e){return this.CustomParts.Fragment_MainBegin=e,this}Fragment_Custom_Albedo(e){return this.CustomParts.Fragment_Custom_Albedo=e.replace("result","surfaceAlbedo"),this}Fragment_Custom_Alpha(e){return this.CustomParts.Fragment_Custom_Alpha=e.replace("result","alpha"),this}Fragment_Before_Lights(e){return this.CustomParts.Fragment_Before_Lights=e,this}Fragment_Custom_MetallicRoughness(e){return this.CustomParts.Fragment_Custom_MetallicRoughness=e,this}Fragment_Custom_MicroSurface(e){return this.CustomParts.Fragment_Custom_MicroSurface=e,this}Fragment_Before_Fog(e){return this.CustomParts.Fragment_Before_Fog=e,this}Fragment_Before_FinalColorComposition(e){return this.CustomParts.Fragment_Before_FinalColorComposition=e,this}Fragment_Before_FragColor(e){return this.CustomParts.Fragment_Before_FragColor=e.replace("result","color"),this}Fragment_MainEnd(e){return this.CustomParts.Fragment_MainEnd=e,this}Vertex_Begin(e){return this.CustomParts.Vertex_Begin=e,this}Vertex_Definitions(e){return this.CustomParts.Vertex_Definitions=e,this}Vertex_MainBegin(e){return this.CustomParts.Vertex_MainBegin=e,this}Vertex_Before_PositionUpdated(e){return this.CustomParts.Vertex_Before_PositionUpdated=e.replace("result","positionUpdated"),this}Vertex_Before_NormalUpdated(e){return this.CustomParts.Vertex_Before_NormalUpdated=e.replace("result","normalUpdated"),this}Vertex_After_WorldPosComputed(e){return this.CustomParts.Vertex_After_WorldPosComputed=e,this}Vertex_MainEnd(e){return this.CustomParts.Vertex_MainEnd=e,this}}Ht.ShaderIndexer=1;oe("BABYLON.PBRCustomMaterial",Ht);const ps="firePixelShader",za=`precision highp float;uniform vec4 vEyePosition;varying vec3 vPositionW;
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
uniform sampler2D distortionSampler;uniform sampler2D opacitySampler;
#ifdef DIFFUSE
varying vec2 vDistortionCoords1;varying vec2 vDistortionCoords2;varying vec2 vDistortionCoords3;
#endif
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
vec4 bx2(vec4 x)
{return vec4(2.0)*x-vec4(1.0);}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);float alpha=1.0;
#ifdef DIFFUSE
const float distortionAmount0 =0.092;const float distortionAmount1 =0.092;const float distortionAmount2 =0.092;vec2 heightAttenuation=vec2(0.3,0.39);vec4 noise0=texture2D(distortionSampler,vDistortionCoords1);vec4 noise1=texture2D(distortionSampler,vDistortionCoords2);vec4 noise2=texture2D(distortionSampler,vDistortionCoords3);vec4 noiseSum=bx2(noise0)*distortionAmount0+bx2(noise1)*distortionAmount1+bx2(noise2)*distortionAmount2;vec4 perturbedBaseCoords=vec4(vDiffuseUV,0.0,1.0)+noiseSum*(vDiffuseUV.y*heightAttenuation.x+heightAttenuation.y);vec4 opacityColor=texture2D(opacitySampler,perturbedBaseCoords.xy);
#ifdef ALPHATEST
if (opacityColor.r<0.1)
discard;
#endif
#include<depthPrePass>
baseColor=texture2D(diffuseSampler,perturbedBaseCoords.xy)*2.0;baseColor*=opacityColor;baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef VERTEXCOLOR
baseColor.rgb*=vColor.rgb;
#endif
vec3 diffuseBase=vec3(1.0,1.0,1.0);
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
vec4 color=vec4(baseColor.rgb,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;C.ShadersStore[ps]||(C.ShadersStore[ps]=za);const xs="fireVertexShader",ka=`precision highp float;attribute vec3 position;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
uniform float time;uniform float speed;
#ifdef DIFFUSE
varying vec2 vDistortionCoords1;varying vec2 vDistortionCoords2;varying vec2 vDistortionCoords3;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
vec4 colorUpdated=color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef DIFFUSE
vDiffuseUV=uv;vDiffuseUV.y-=0.2;
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#ifdef DIFFUSE
vec3 layerSpeed=vec3(-0.2,-0.52,-0.1)*speed;vDistortionCoords1.x=uv.x;vDistortionCoords1.y=uv.y+layerSpeed.x*time/1000.0;vDistortionCoords2.x=uv.x;vDistortionCoords2.y=uv.y+layerSpeed.y*time/1000.0;vDistortionCoords3.x=uv.x;vDistortionCoords3.y=uv.y+layerSpeed.z*time/1000.0;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;C.ShadersStore[xs]||(C.ShadersStore[xs]=ka);class Ha extends Se{constructor(){super(),this.DIFFUSE=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.UV1=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.BonesPerMesh=0,this.NUM_BONE_INFLUENCERS=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.LOGARITHMICDEPTH=!1,this.rebuild()}}class Re extends ge{constructor(e,i){super(e,i),this.diffuseColor=new N(1,1,1),this.speed=1,this._scaledDiffuse=new N,this._lastTime=0}needAlphaBlending(){return!1}needAlphaTesting(){return!0}getAlphaTestTexture(){return null}isReadyForSubMesh(e,i,a){const s=i._drawWrapper;if(this.isFrozen&&s._wasPreviouslyReady&&s._wasPreviouslyUsingInstances===a)return!0;i.materialDefines||(i.materialDefines=new Ha);const r=i.materialDefines,n=this.getScene();if(this._isReadyForSubMesh(i))return!0;const o=n.getEngine();if(r._areTexturesDirty&&(r._needUVs=!1,this._diffuseTexture&&U.DiffuseTextureEnabled))if(this._diffuseTexture.isReady())r._needUVs=!0,r.DIFFUSE=!0;else return!1;if(r.ALPHATEST=!!this._opacityTexture,r._areMiscDirty&&(r.POINTSIZE=this.pointsCloud||n.forcePointsCloud,r.FOG=n.fogEnabled&&e.applyFog&&n.fogMode!==ne.FOGMODE_NONE&&this.fogEnabled,r.LOGARITHMICDEPTH=this._useLogarithmicDepth),Ce(n,o,this,r,!!a),ve(e,r,!1,!0),r.isDirty){r.markAsProcessed(),n.resetCachedMaterial();const f=new Ae;r.FOG&&f.addFallback(1,"FOG"),r.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e),r.IMAGEPROCESSINGPOSTPROCESS=n.imageProcessingConfiguration.applyByPostProcess;const l=[P.PositionKind];r.UV1&&l.push(P.UVKind),r.VERTEXCOLOR&&l.push(P.ColorKind),Oe(l,e,r,f),Ne(l,r);const c="fire",u=["world","view","viewProjection","vEyePosition","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","diffuseMatrix","logarithmicDepthConstant","time","speed"];_e(u);const h=r.toString();i.setEffect(n.getEngine().createEffect(c,{attributes:l,uniformsNames:u,uniformBuffersNames:[],samplers:["diffuseSampler","distortionSampler","opacitySampler"],defines:h,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:null,maxSimultaneousLights:4,transformFeedbackVaryings:null},o),r,this._materialContext)}return!i.effect||!i.effect.isReady()?!1:(r._renderId=n.getRenderId(),s._wasPreviouslyReady=!0,s._wasPreviouslyUsingInstances=!!a,!0)}bindForSubMesh(e,i,a){const s=this.getScene(),r=a.materialDefines;if(!r)return;const n=a.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),De(i,this._activeEffect),this._mustRebind(s,n,a)&&(this._diffuseTexture&&U.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this._diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this._diffuseTexture.getTextureMatrix()),this._activeEffect.setTexture("distortionSampler",this._distortionTexture),this._activeEffect.setTexture("opacitySampler",this._opacityTexture)),pe(this._activeEffect,this,s),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&he(r,n,s),s.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this._scaledDiffuse,this.alpha*i.visibility),s.fogEnabled&&i.applyFog&&s.fogMode!==ne.FOGMODE_NONE&&this._activeEffect.setMatrix("view",s.getViewMatrix()),xe(s,i,this._activeEffect),this._lastTime+=s.getEngine().getDeltaTime(),this._activeEffect.setFloat("time",this._lastTime),this._activeEffect.setFloat("speed",this.speed),this._afterBind(i,this._activeEffect,a))}getAnimatables(){const e=[];return this._diffuseTexture&&this._diffuseTexture.animations&&this._diffuseTexture.animations.length>0&&e.push(this._diffuseTexture),this._distortionTexture&&this._distortionTexture.animations&&this._distortionTexture.animations.length>0&&e.push(this._distortionTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&e.push(this._opacityTexture),e}getActiveTextures(){const e=super.getActiveTextures();return this._diffuseTexture&&e.push(this._diffuseTexture),this._distortionTexture&&e.push(this._distortionTexture),this._opacityTexture&&e.push(this._opacityTexture),e}hasTexture(e){return!!(super.hasTexture(e)||this._diffuseTexture===e||this._distortionTexture===e||this._opacityTexture===e)}getClassName(){return"FireMaterial"}dispose(e){this._diffuseTexture&&this._diffuseTexture.dispose(),this._distortionTexture&&this._distortionTexture.dispose(),super.dispose(e)}clone(e){return V.Clone(()=>new Re(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.FireMaterial",e.diffuseColor=this.diffuseColor.asArray(),e.speed=this.speed,this._diffuseTexture&&(e._diffuseTexture=this._diffuseTexture.serialize()),this._distortionTexture&&(e._distortionTexture=this._distortionTexture.serialize()),this._opacityTexture&&(e._opacityTexture=this._opacityTexture.serialize()),e}static Parse(e,i,a){const s=new Re(e.name,i);return s.diffuseColor=N.FromArray(e.diffuseColor),s.speed=e.speed,s.alpha=e.alpha,s.id=e.id,Di.AddTagsTo(s,e.tags),s.backFaceCulling=e.backFaceCulling,s.wireframe=e.wireframe,e._diffuseTexture&&(s._diffuseTexture=Rt.Parse(e._diffuseTexture,i,a)),e._distortionTexture&&(s._distortionTexture=Rt.Parse(e._distortionTexture,i,a)),e._opacityTexture&&(s._opacityTexture=Rt.Parse(e._opacityTexture,i,a)),s}}d([w("diffuseTexture")],Re.prototype,"_diffuseTexture",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],Re.prototype,"diffuseTexture",void 0);d([w("distortionTexture")],Re.prototype,"_distortionTexture",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],Re.prototype,"distortionTexture",void 0);d([w("opacityTexture")],Re.prototype,"_opacityTexture",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],Re.prototype,"opacityTexture",void 0);d([X("diffuse")],Re.prototype,"diffuseColor",void 0);d([T()],Re.prototype,"speed",void 0);oe("BABYLON.FireMaterial",Re);const Ss="furPixelShader",Wa=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 furColor;uniform float furLength;varying vec3 vPositionW;varying float vfur_length;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
#ifdef HIGHLEVEL
uniform float furOffset;uniform float furOcclusion;uniform sampler2D furTexture;varying vec2 vFurUV;
#endif
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<fogFragmentDeclaration>
#include<clipPlaneFragmentDeclaration>
float Rand(vec3 rv) {float x=dot(rv,vec3(12.9898,78.233,24.65487));return fract(sin(x)*43758.5453);}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=furColor;vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef DIFFUSE
baseColor*=texture2D(diffuseSampler,vDiffuseUV);
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef VERTEXCOLOR
baseColor.rgb*=vColor.rgb;
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef HIGHLEVEL
vec4 furTextureColor=texture2D(furTexture,vec2(vFurUV.x,vFurUV.y));if (furTextureColor.a<=0.0 || furTextureColor.g<furOffset) {discard;}
float occlusion=mix(0.0,furTextureColor.b*1.2,furOffset);baseColor=vec4(baseColor.xyz*max(occlusion,furOcclusion),1.1-furOffset);
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
vec3 finalDiffuse=clamp(diffuseBase.rgb*baseColor.rgb,0.0,1.0);
#ifdef HIGHLEVEL
vec4 color=vec4(finalDiffuse,alpha);
#else
float r=vfur_length/furLength*0.5;vec4 color=vec4(finalDiffuse*(0.5+r),alpha);
#endif
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;C.ShadersStore[Ss]||(C.ShadersStore[Ss]=Wa);const Es="furVertexShader",Xa=`precision highp float;attribute vec3 position;attribute vec3 normal;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
uniform float furLength;uniform float furAngle;
#ifdef HIGHLEVEL
uniform float furOffset;uniform vec3 furGravity;uniform float furTime;uniform float furSpacing;uniform float furDensity;
#endif
#ifdef HEIGHTMAP
uniform sampler2D heightTexture;
#endif
#ifdef HIGHLEVEL
varying vec2 vFurUV;
#endif
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
varying float vfur_length;
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
float Rand(vec3 rv) {float x=dot(rv,vec3(12.9898,78.233,24.65487));return fract(sin(x)*43758.5453);}
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
vec4 colorUpdated=color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
float r=Rand(position);
#ifdef HEIGHTMAP
#if __VERSION__>100
vfur_length=furLength*texture(heightTexture,uv).x;
#else
vfur_length=furLength*texture2D(heightTexture,uv).r;
#endif
#else 
vfur_length=(furLength*r);
#endif
vec3 tangent1=vec3(normal.y,-normal.x,0);vec3 tangent2=vec3(-normal.z,0,normal.x);r=Rand(tangent1*r);float J=(2.0+4.0*r);r=Rand(tangent2*r);float K=(2.0+2.0*r);tangent1=tangent1*J+tangent2*K;tangent1=normalize(tangent1);vec3 newPosition=position+normal*vfur_length*cos(furAngle)+tangent1*vfur_length*sin(furAngle);
#ifdef HIGHLEVEL
vec3 forceDirection=vec3(0.0,0.0,0.0);forceDirection.x=sin(furTime+position.x*0.05)*0.2;forceDirection.y=cos(furTime*0.7+position.y*0.04)*0.2;forceDirection.z=sin(furTime*0.7+position.z*0.04)*0.2;vec3 displacement=vec3(0.0,0.0,0.0);displacement=furGravity+forceDirection;float displacementFactor=pow(furOffset,3.0);vec3 aNormal=normal;aNormal.xyz+=displacement*displacementFactor;newPosition=vec3(newPosition.x,newPosition.y,newPosition.z)+(normalize(aNormal)*furOffset*furSpacing);
#endif
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
gl_Position=viewProjection*finalWorld*vec4(newPosition,1.0);vec4 worldPos=finalWorld*vec4(newPosition,1.0);vPositionW=vec3(worldPos);
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#ifdef HIGHLEVEL
vFurUV=vDiffuseUV*furDensity;
#endif
#else
#ifdef HIGHLEVEL
vFurUV=uv*furDensity;
#endif
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;C.ShadersStore[Es]||(C.ShadersStore[Es]=Xa);class ja extends Se{constructor(){super(),this.DIFFUSE=!1,this.HEIGHTMAP=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.NORMAL=!1,this.UV1=!1,this.UV2=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.HIGHLEVEL=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.LOGARITHMICDEPTH=!1,this.AREALIGHTSUPPORTED=!0,this.AREALIGHTNOROUGHTNESS=!0,this.rebuild()}}class G extends ge{constructor(e,i){super(e,i),this.diffuseColor=new N(1,1,1),this.furLength=1,this.furAngle=0,this.furColor=new N(.44,.21,.02),this.furOffset=0,this.furSpacing=12,this.furGravity=new Z(0,0,0),this.furSpeed=100,this.furDensity=20,this.furOcclusion=0,this._disableLighting=!1,this._maxSimultaneousLights=4,this.highLevelFur=!0,this._furTime=0}get furTime(){return this._furTime}set furTime(e){this._furTime=e}needAlphaBlending(){return this.alpha<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}updateFur(){for(let e=1;e<this._meshes.length;e++){const i=this._meshes[e].material;i.furLength=this.furLength,i.furAngle=this.furAngle,i.furGravity=this.furGravity,i.furSpacing=this.furSpacing,i.furSpeed=this.furSpeed,i.furColor=this.furColor,i.diffuseTexture=this.diffuseTexture,i.furTexture=this.furTexture,i.highLevelFur=this.highLevelFur,i.furTime=this.furTime,i.furDensity=this.furDensity}}isReadyForSubMesh(e,i,a){const s=i._drawWrapper;if(this.isFrozen&&s.effect&&s._wasPreviouslyReady&&s._wasPreviouslyUsingInstances===a)return!0;i.materialDefines||(i.materialDefines=new ja);const r=i.materialDefines,n=this.getScene();if(this._isReadyForSubMesh(i))return!0;const o=n.getEngine();if(r._areTexturesDirty&&n.texturesEnabled){if(this.diffuseTexture&&U.DiffuseTextureEnabled)if(this.diffuseTexture.isReady())r._needUVs=!0,r.DIFFUSE=!0;else return!1;if(this.heightTexture&&o.getCaps().maxVertexTextureImageUnits)if(this.heightTexture.isReady())r._needUVs=!0,r.HEIGHTMAP=!0;else return!1}if(this.highLevelFur!==r.HIGHLEVEL&&(r.HIGHLEVEL=!0,r.markAsUnprocessed()),Pe(e,n,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this.needAlphaTestingForMesh(e),r),r._needNormals=Ve(n,e,r,!1,this._maxSimultaneousLights,this._disableLighting),Ce(n,o,this,r,!!a),ve(e,r,!0,!0),r.isDirty){r.markAsProcessed(),n.resetCachedMaterial();const f=new Ae;r.FOG&&f.addFallback(1,"FOG"),Be(r,f,this.maxSimultaneousLights),r.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e),r.IMAGEPROCESSINGPOSTPROCESS=n.imageProcessingConfiguration.applyByPostProcess;const l=[P.PositionKind];r.NORMAL&&l.push(P.NormalKind),r.UV1&&l.push(P.UVKind),r.UV2&&l.push(P.UV2Kind),r.VERTEXCOLOR&&l.push(P.ColorKind),Oe(l,e,r,f),Ne(l,r);const c="fur",u=r.toString(),h=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","diffuseMatrix","logarithmicDepthConstant","furLength","furAngle","furColor","furOffset","furGravity","furTime","furSpacing","furDensity","furOcclusion"];_e(h);const m=["diffuseSampler","heightTexture","furTexture","areaLightsLTC1Sampler","areaLightsLTC2Sampler"],g=[];ze({uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:r,maxSimultaneousLights:this.maxSimultaneousLights}),i.setEffect(n.getEngine().createEffect(c,{attributes:l,uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},o),r,this._materialContext)}if(r.AREALIGHTUSED){for(let f=0;f<e.lightSources.length;f++)if(!e.lightSources[f]._isReady())return!1}return!i.effect||!i.effect.isReady()?!1:(r._renderId=n.getRenderId(),s._wasPreviouslyReady=!0,s._wasPreviouslyUsingInstances=!!a,!0)}bindForSubMesh(e,i,a){const s=this.getScene(),r=a.materialDefines;if(!r)return;const n=a.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),De(i,this._activeEffect),this._mustRebind(s,n,a)&&(this._diffuseTexture&&U.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this._diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this._diffuseTexture.getTextureMatrix())),this._heightTexture&&this._activeEffect.setTexture("heightTexture",this._heightTexture),pe(this._activeEffect,this,s),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&he(r,n,s),s.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*i.visibility),s.lightsEnabled&&!this.disableLighting&&ke(s,i,this._activeEffect,r,this.maxSimultaneousLights),s.fogEnabled&&i.applyFog&&s.fogMode!==ne.FOGMODE_NONE&&this._activeEffect.setMatrix("view",s.getViewMatrix()),xe(s,i,this._activeEffect),this._activeEffect.setFloat("furLength",this.furLength),this._activeEffect.setFloat("furAngle",this.furAngle),this._activeEffect.setColor4("furColor",this.furColor,1),this.highLevelFur&&(this._activeEffect.setVector3("furGravity",this.furGravity),this._activeEffect.setFloat("furOffset",this.furOffset),this._activeEffect.setFloat("furSpacing",this.furSpacing),this._activeEffect.setFloat("furDensity",this.furDensity),this._activeEffect.setFloat("furOcclusion",this.furOcclusion),this._furTime+=this.getScene().getEngine().getDeltaTime()/this.furSpeed,this._activeEffect.setFloat("furTime",this._furTime),this._activeEffect.setTexture("furTexture",this.furTexture)),this._afterBind(i,this._activeEffect,a))}getAnimatables(){const e=[];return this.diffuseTexture&&this.diffuseTexture.animations&&this.diffuseTexture.animations.length>0&&e.push(this.diffuseTexture),this.heightTexture&&this.heightTexture.animations&&this.heightTexture.animations.length>0&&e.push(this.heightTexture),e}getActiveTextures(){const e=super.getActiveTextures();return this._diffuseTexture&&e.push(this._diffuseTexture),this._heightTexture&&e.push(this._heightTexture),e}hasTexture(e){return!!(super.hasTexture(e)||this.diffuseTexture===e||this._heightTexture===e)}dispose(e){if(this.diffuseTexture&&this.diffuseTexture.dispose(),this._meshes)for(let i=1;i<this._meshes.length;i++){const a=this._meshes[i].material;a&&a.dispose(e),this._meshes[i].dispose()}super.dispose(e)}clone(e){return V.Clone(()=>new G(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.FurMaterial",this._meshes&&(e.sourceMeshName=this._meshes[0].name,e.quality=this._meshes.length),e}getClassName(){return"FurMaterial"}static Parse(e,i,a){const s=V.Parse(()=>new G(e.name,i),e,i,a);return e.sourceMeshName&&s.highLevelFur&&i.executeWhenReady(()=>{const r=i.getMeshByName(e.sourceMeshName);if(r){const n=G.GenerateTexture("Fur Texture",i);s.furTexture=n,G.FurifyMesh(r,e.quality)}}),s}static GenerateTexture(e,i){const a=new na("FurTexture "+e,256,i,!0),s=a.getContext();for(let r=0;r<2e4;++r)s.fillStyle="rgba(255, "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", 1)",s.fillRect(Math.random()*a.getSize().width,Math.random()*a.getSize().height,2,2);return a.update(!1),a.wrapU=Rt.WRAP_ADDRESSMODE,a.wrapV=Rt.WRAP_ADDRESSMODE,a}static FurifyMesh(e,i){const a=[e],s=e.material;let r;if(!(s instanceof G))throw"The material of the source mesh must be a Fur Material";for(r=1;r<i;r++){const n=new G(s.name+r,e.getScene());e.getScene().materials.pop(),Di.EnableFor(n),Di.AddTagsTo(n,"furShellMaterial"),n.furLength=s.furLength,n.furAngle=s.furAngle,n.furGravity=s.furGravity,n.furSpacing=s.furSpacing,n.furSpeed=s.furSpeed,n.furColor=s.furColor,n.diffuseTexture=s.diffuseTexture,n.furOffset=r/i,n.furTexture=s.furTexture,n.highLevelFur=s.highLevelFur,n.furTime=s.furTime,n.furDensity=s.furDensity;const o=e.clone(e.name+r);o.material=n,o.skeleton=e.skeleton,o.position=Z.Zero(),a.push(o)}for(r=1;r<a.length;r++)a[r].parent=e;return e.material._meshes=a,a}}d([w("diffuseTexture")],G.prototype,"_diffuseTexture",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],G.prototype,"diffuseTexture",void 0);d([w("heightTexture")],G.prototype,"_heightTexture",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],G.prototype,"heightTexture",void 0);d([X()],G.prototype,"diffuseColor",void 0);d([T()],G.prototype,"furLength",void 0);d([T()],G.prototype,"furAngle",void 0);d([X()],G.prototype,"furColor",void 0);d([T()],G.prototype,"furOffset",void 0);d([T()],G.prototype,"furSpacing",void 0);d([Kt()],G.prototype,"furGravity",void 0);d([T()],G.prototype,"furSpeed",void 0);d([T()],G.prototype,"furDensity",void 0);d([T()],G.prototype,"furOcclusion",void 0);d([T("disableLighting")],G.prototype,"_disableLighting",void 0);d([y("_markAllSubMeshesAsLightsDirty")],G.prototype,"disableLighting",void 0);d([T("maxSimultaneousLights")],G.prototype,"_maxSimultaneousLights",void 0);d([y("_markAllSubMeshesAsLightsDirty")],G.prototype,"maxSimultaneousLights",void 0);d([T()],G.prototype,"highLevelFur",void 0);d([T()],G.prototype,"furTime",null);oe("BABYLON.FurMaterial",G);const Ts="gradientPixelShader",$a=`precision highp float;uniform vec4 vEyePosition;uniform vec4 topColor;uniform vec4 bottomColor;uniform float offset;uniform float scale;uniform float smoothness;varying vec3 vPositionW;varying vec3 vPosition;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0]
#include<__decl__lightFragment>[1]
#include<__decl__lightFragment>[2]
#include<__decl__lightFragment>[3]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);float h=vPosition.y*scale+offset;float mysmoothness=clamp(smoothness,0.01,max(smoothness,10.));vec4 baseColor=mix(bottomColor,topColor,max(pow(max(h,0.0),mysmoothness),0.0));vec3 diffuseColor=baseColor.rgb;float alpha=baseColor.a;
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
#ifdef VERTEXCOLOR
baseColor.rgb*=vColor.rgb;
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef EMISSIVE
vec3 diffuseBase=baseColor.rgb;
#else
vec3 diffuseBase=vec3(0.,0.,0.);
#endif
lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;C.ShadersStore[Ts]||(C.ShadersStore[Ts]=$a);const Ms="gradientVertexShader",qa=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;varying vec3 vPosition;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
vec4 colorUpdated=color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);vPosition=position;
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;C.ShadersStore[Ms]||(C.ShadersStore[Ms]=qa);class Ka extends Se{constructor(){super(),this.EMISSIVE=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.NORMAL=!1,this.UV1=!1,this.UV2=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.LOGARITHMICDEPTH=!1,this.AREALIGHTSUPPORTED=!0,this.AREALIGHTNOROUGHTNESS=!0,this.rebuild()}}class ue extends ge{constructor(e,i){super(e,i),this._maxSimultaneousLights=4,this.topColor=new N(1,0,0),this.topColorAlpha=1,this.bottomColor=new N(0,0,1),this.bottomColorAlpha=1,this.offset=0,this.scale=1,this.smoothness=1,this._disableLighting=!1}needAlphaBlending(){return this.alpha<1||this.topColorAlpha<1||this.bottomColorAlpha<1}needAlphaTesting(){return!0}getAlphaTestTexture(){return null}isReadyForSubMesh(e,i,a){const s=i._drawWrapper;if(this.isFrozen&&s.effect&&s._wasPreviouslyReady&&s._wasPreviouslyUsingInstances===a)return!0;i.materialDefines||(i.materialDefines=new Ka);const r=i.materialDefines,n=this.getScene();if(this._isReadyForSubMesh(i))return!0;const o=n.getEngine();if(Ce(n,o,this,r,!!a),Pe(e,n,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this.needAlphaTestingForMesh(e),r),r._needNormals=Ve(n,e,r,!1,this._maxSimultaneousLights,this._disableLighting),r.EMISSIVE=this._disableLighting,ve(e,r,!1,!0),r.isDirty){r.markAsProcessed(),n.resetCachedMaterial();const f=new Ae;r.FOG&&f.addFallback(1,"FOG"),Be(r,f),r.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e),r.IMAGEPROCESSINGPOSTPROCESS=n.imageProcessingConfiguration.applyByPostProcess;const l=[P.PositionKind];r.NORMAL&&l.push(P.NormalKind),r.UV1&&l.push(P.UVKind),r.UV2&&l.push(P.UV2Kind),r.VERTEXCOLOR&&l.push(P.ColorKind),Oe(l,e,r,f),Ne(l,r);const c="gradient",u=r.toString(),h=["world","view","viewProjection","vEyePosition","vLightsType","vFogInfos","vFogColor","pointSize","mBones","logarithmicDepthConstant","topColor","bottomColor","offset","smoothness","scale"];_e(h);const m=["areaLightsLTC1Sampler","areaLightsLTC2Sampler"],g=[];ze({uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:r,maxSimultaneousLights:4}),i.setEffect(n.getEngine().createEffect(c,{attributes:l,uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},o),r,this._materialContext)}if(r.AREALIGHTUSED){for(let f=0;f<e.lightSources.length;f++)if(!e.lightSources[f]._isReady())return!1}return!i.effect||!i.effect.isReady()?!1:(r._renderId=n.getRenderId(),s._wasPreviouslyReady=!0,s._wasPreviouslyUsingInstances=!!a,!0)}bindForSubMesh(e,i,a){const s=this.getScene(),r=a.materialDefines;if(!r)return;const n=a.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),De(i,n),this._mustRebind(s,n,a)&&(pe(n,this,s),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&he(r,n,s),s.bindEyePosition(n)),s.lightsEnabled&&!this.disableLighting&&ke(s,i,this._activeEffect,r,this.maxSimultaneousLights),s.fogEnabled&&i.applyFog&&s.fogMode!==ne.FOGMODE_NONE&&this._activeEffect.setMatrix("view",s.getViewMatrix()),xe(s,i,this._activeEffect),this._activeEffect.setColor4("topColor",this.topColor,this.topColorAlpha),this._activeEffect.setColor4("bottomColor",this.bottomColor,this.bottomColorAlpha),this._activeEffect.setFloat("offset",this.offset),this._activeEffect.setFloat("scale",this.scale),this._activeEffect.setFloat("smoothness",this.smoothness),this._afterBind(i,this._activeEffect,a))}getAnimatables(){return[]}dispose(e){super.dispose(e)}clone(e){return V.Clone(()=>new ue(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.GradientMaterial",e}getClassName(){return"GradientMaterial"}static Parse(e,i,a){return V.Parse(()=>new ue(e.name,i),e,i,a)}}d([T("maxSimultaneousLights")],ue.prototype,"_maxSimultaneousLights",void 0);d([y("_markAllSubMeshesAsLightsDirty")],ue.prototype,"maxSimultaneousLights",void 0);d([X()],ue.prototype,"topColor",void 0);d([T()],ue.prototype,"topColorAlpha",void 0);d([X()],ue.prototype,"bottomColor",void 0);d([T()],ue.prototype,"bottomColorAlpha",void 0);d([T()],ue.prototype,"offset",void 0);d([T()],ue.prototype,"scale",void 0);d([T()],ue.prototype,"smoothness",void 0);d([T("disableLighting")],ue.prototype,"_disableLighting",void 0);d([y("_markAllSubMeshesAsLightsDirty")],ue.prototype,"disableLighting",void 0);oe("BABYLON.GradientMaterial",ue);const ys="gridPixelShader",Za=`#extension GL_OES_standard_derivatives : enable
#define SQRT2 1.41421356
#define PI 3.14159
precision highp float;uniform float visibility;uniform vec3 mainColor;uniform vec3 lineColor;uniform vec4 gridControl;uniform vec3 gridOffset;varying vec3 vPosition;varying vec3 vNormal;
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#ifdef OPACITY
varying vec2 vOpacityUV;uniform sampler2D opacitySampler;uniform vec2 vOpacityInfos;
#endif
float getDynamicVisibility(float position) {float majorGridFrequency=gridControl.y;if (floor(position+0.5)==floor(position/majorGridFrequency+0.5)*majorGridFrequency)
{return 1.0;}
return gridControl.z;}
float getAnisotropicAttenuation(float differentialLength) {const float maxNumberOfLines=10.0;return clamp(1.0/(differentialLength+1.0)-1.0/maxNumberOfLines,0.0,1.0);}
float isPointOnLine(float position,float differentialLength) {float fractionPartOfPosition=position-floor(position+0.5); 
fractionPartOfPosition/=differentialLength; 
#ifdef ANTIALIAS
fractionPartOfPosition=clamp(fractionPartOfPosition,-1.,1.);float result=0.5+0.5*cos(fractionPartOfPosition*PI); 
return result;
#else
return abs(fractionPartOfPosition)<SQRT2/4. ? 1. : 0.;
#endif
}
float contributionOnAxis(float position) {float differentialLength=length(vec2(dFdx(position),dFdy(position)));differentialLength*=SQRT2; 
float result=isPointOnLine(position,differentialLength);float dynamicVisibility=getDynamicVisibility(position);result*=dynamicVisibility;float anisotropicAttenuation=getAnisotropicAttenuation(differentialLength);result*=anisotropicAttenuation;return result;}
float normalImpactOnAxis(float x) {float normalImpact=clamp(1.0-3.0*abs(x*x*x),0.0,1.0);return normalImpact;}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
float gridRatio=gridControl.x;vec3 gridPos=(vPosition+gridOffset.xyz)/gridRatio;float x=contributionOnAxis(gridPos.x);float y=contributionOnAxis(gridPos.y);float z=contributionOnAxis(gridPos.z);vec3 normal=normalize(vNormal);x*=normalImpactOnAxis(normal.x);y*=normalImpactOnAxis(normal.y);z*=normalImpactOnAxis(normal.z);
#ifdef MAX_LINE
float grid=clamp(max(max(x,y),z),0.,1.);
#else
float grid=clamp(x+y+z,0.,1.);
#endif
vec3 color=mix(mainColor,lineColor,grid);
#ifdef FOG
#include<fogFragment>
#endif
float opacity=1.0;
#ifdef TRANSPARENT
opacity=clamp(grid,0.08,gridControl.w*grid);
#endif
#ifdef OPACITY
opacity*=texture2D(opacitySampler,vOpacityUV).a;
#endif
gl_FragColor=vec4(color.rgb,opacity*visibility);
#ifdef TRANSPARENT
#ifdef PREMULTIPLYALPHA
gl_FragColor.rgb*=opacity;
#endif
#else
#endif
#include<logDepthFragment>
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;C.ShadersStore[ys]||(C.ShadersStore[ys]=Za);const Ps="gridVertexShader",Ya=`precision highp float;attribute vec3 position;attribute vec3 normal;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#include<instancesDeclaration>
uniform mat4 projection;uniform mat4 view;varying vec3 vPosition;varying vec3 vNormal;
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#ifdef OPACITY
varying vec2 vOpacityUV;uniform mat4 opacityMatrix;uniform vec2 vOpacityInfos;
#endif
#include<clipPlaneVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
vec4 worldPos=finalWorld*vec4(position,1.0);
#include<fogVertex>
vec4 cameraSpacePosition=view*worldPos;gl_Position=projection*cameraSpacePosition;
#ifdef OPACITY
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
if (vOpacityInfos.x==0.)
{vOpacityUV=vec2(opacityMatrix*vec4(uv,1.0,0.0));}
else
{vOpacityUV=vec2(opacityMatrix*vec4(uv2,1.0,0.0));}
#endif 
#include<clipPlaneVertex>
#include<logDepthVertex>
vPosition=position;vNormal=normal;
#define CUSTOM_VERTEX_MAIN_END
}`;C.ShadersStore[Ps]||(C.ShadersStore[Ps]=Ya);class Qa extends Se{constructor(){super(),this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.OPACITY=!1,this.ANTIALIAS=!1,this.TRANSPARENT=!1,this.FOG=!1,this.PREMULTIPLYALPHA=!1,this.MAX_LINE=!1,this.UV1=!1,this.UV2=!1,this.INSTANCES=!1,this.THIN_INSTANCES=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.LOGARITHMICDEPTH=!1,this.rebuild()}}class ie extends ge{constructor(e,i){super(e,i),this.mainColor=N.Black(),this.lineColor=N.Teal(),this.gridRatio=1,this.gridOffset=Z.Zero(),this.majorUnitFrequency=10,this.minorUnitVisibility=.33,this.opacity=1,this.antialias=!0,this.preMultiplyAlpha=!1,this.useMaxLine=!1,this._gridControl=new oa(this.gridRatio,this.majorUnitFrequency,this.minorUnitVisibility,this.opacity)}needAlphaBlending(){return this.opacity<1||this._opacityTexture&&this._opacityTexture.isReady()}needAlphaBlendingForMesh(e){return e.visibility<1||this.needAlphaBlending()}isReadyForSubMesh(e,i,a){const s=i._drawWrapper;if(this.isFrozen&&s.effect&&s._wasPreviouslyReady&&s._wasPreviouslyUsingInstances===a)return!0;i.materialDefines||(i.materialDefines=new Qa);const r=i.materialDefines,n=this.getScene();if(this._isReadyForSubMesh(i))return!0;if(r.TRANSPARENT!==this.opacity<1&&(r.TRANSPARENT=!r.TRANSPARENT,r.markAsUnprocessed()),r.PREMULTIPLYALPHA!=this.preMultiplyAlpha&&(r.PREMULTIPLYALPHA=!r.PREMULTIPLYALPHA,r.markAsUnprocessed()),r.MAX_LINE!==this.useMaxLine&&(r.MAX_LINE=!r.MAX_LINE,r.markAsUnprocessed()),r.ANTIALIAS!==this.antialias&&(r.ANTIALIAS=!r.ANTIALIAS,r.markAsUnprocessed()),r._areTexturesDirty&&(r._needUVs=!1,n.texturesEnabled&&this._opacityTexture&&U.OpacityTextureEnabled))if(this._opacityTexture.isReady())r._needUVs=!0,r.OPACITY=!0;else return!1;if(Pe(e,n,this._useLogarithmicDepth,!1,this.fogEnabled,!1,r),Ce(n,n.getEngine(),this,r,!!a),r.isDirty){r.markAsProcessed(),n.resetCachedMaterial(),ve(e,r,!1,!1);const o=[P.PositionKind,P.NormalKind];r.UV1&&o.push(P.UVKind),r.UV2&&o.push(P.UV2Kind),r.IMAGEPROCESSINGPOSTPROCESS=n.imageProcessingConfiguration.applyByPostProcess,Ne(o,r);const f=["projection","mainColor","lineColor","gridControl","gridOffset","vFogInfos","vFogColor","world","view","opacityMatrix","vOpacityInfos","visibility","logarithmicDepthConstant"],l=r.toString();_e(f),i.setEffect(n.getEngine().createEffect("grid",o,f,["opacitySampler"],l,void 0,this.onCompiled,this.onError),r,this._materialContext)}return!i.effect||!i.effect.isReady()?!1:(r._renderId=n.getRenderId(),s._wasPreviouslyReady=!0,s._wasPreviouslyUsingInstances=!!a,!0)}bindForSubMesh(e,i,a){const s=this.getScene(),r=a.materialDefines;if(!r)return;const n=a.effect;n&&(this._activeEffect=n,this._activeEffect.setFloat("visibility",i.visibility),(!r.INSTANCES||r.THIN_INSTANCE)&&this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("view",s.getViewMatrix()),this._activeEffect.setMatrix("projection",s.getProjectionMatrix()),this._mustRebind(s,n,a)&&(this._activeEffect.setColor3("mainColor",this.mainColor),this._activeEffect.setColor3("lineColor",this.lineColor),this._activeEffect.setVector3("gridOffset",this.gridOffset),this._gridControl.x=this.gridRatio,this._gridControl.y=Math.round(this.majorUnitFrequency),this._gridControl.z=this.minorUnitVisibility,this._gridControl.w=this.opacity,this._activeEffect.setVector4("gridControl",this._gridControl),this._opacityTexture&&U.OpacityTextureEnabled&&(this._activeEffect.setTexture("opacitySampler",this._opacityTexture),this._activeEffect.setFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),this._activeEffect.setMatrix("opacityMatrix",this._opacityTexture.getTextureMatrix())),pe(n,this,s),this._useLogarithmicDepth&&he(r,n,s)),xe(s,i,this._activeEffect),this._afterBind(i,this._activeEffect,a))}dispose(e){super.dispose(e)}clone(e){return V.Clone(()=>new ie(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.GridMaterial",e}getClassName(){return"GridMaterial"}static Parse(e,i,a){return V.Parse(()=>new ie(e.name,i),e,i,a)}}d([X()],ie.prototype,"mainColor",void 0);d([X()],ie.prototype,"lineColor",void 0);d([T()],ie.prototype,"gridRatio",void 0);d([Kt()],ie.prototype,"gridOffset",void 0);d([T()],ie.prototype,"majorUnitFrequency",void 0);d([T()],ie.prototype,"minorUnitVisibility",void 0);d([T()],ie.prototype,"opacity",void 0);d([T()],ie.prototype,"antialias",void 0);d([T()],ie.prototype,"preMultiplyAlpha",void 0);d([T()],ie.prototype,"useMaxLine",void 0);d([w("opacityTexture")],ie.prototype,"_opacityTexture",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],ie.prototype,"opacityTexture",void 0);oe("BABYLON.GridMaterial",ie);const Cs="lavaPixelShader",Ja=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;uniform float time;uniform float speed;uniform float movingSpeed;uniform vec3 fogColor;uniform sampler2D noiseTexture;uniform float fogDensity;varying float noise;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0]
#include<__decl__lightFragment>[1]
#include<__decl__lightFragment>[2]
#include<__decl__lightFragment>[3]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
float random( vec3 scale,float seed ){return fract( sin( dot( gl_FragCoord.xyz+seed,scale ) )*43758.5453+seed ) ;}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef DIFFUSE
vec4 noiseTex=texture2D( noiseTexture,vDiffuseUV );vec2 T1=vDiffuseUV+vec2( 1.5,-1.5 )*time *0.02;vec2 T2=vDiffuseUV+vec2( -0.5,2.0 )*time*0.01*speed;T1.x+=noiseTex.x*2.0;T1.y+=noiseTex.y*2.0;T2.x-=noiseTex.y*0.2+time*0.001*movingSpeed;T2.y+=noiseTex.z*0.2+time*0.002*movingSpeed;float p=texture2D( noiseTexture,T1*3.0 ).a;vec4 lavaColor=texture2D( diffuseSampler,T2*4.0);vec4 temp=lavaColor*( vec4( p,p,p,p )*2. )+( lavaColor*lavaColor-0.1 );baseColor=temp;float depth=gl_FragCoord.z*4.0;const float LOG2=1.442695;float fogFactor=exp2(-fogDensity*fogDensity*depth*depth*LOG2 );fogFactor=1.0-clamp( fogFactor,0.0,1.0 );baseColor=mix( baseColor,vec4( fogColor,baseColor.w ),fogFactor );diffuseColor=baseColor.rgb;
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef VERTEXCOLOR
baseColor.rgb*=vColor.rgb;
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef UNLIT
vec3 diffuseBase=vec3(1.,1.,1.);
#else
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#include<lightFragment>[0]
#include<lightFragment>[1]
#include<lightFragment>[2]
#include<lightFragment>[3]
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;C.ShadersStore[Cs]||(C.ShadersStore[Cs]=Ja);const As="lavaVertexShader",en=`precision highp float;uniform float time;uniform float lowFrequencySpeed;varying float noise;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
/* NOISE FUNCTIONS */
vec3 mod289(vec3 x)
{return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x)
{return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x)
{return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r)
{return 1.79284291400159-0.85373472095314*r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
float pnoise(vec3 P,vec3 rep)
{vec3 Pi0=mod(floor(P),rep); 
vec3 Pi1=mod(Pi0+vec3(1.0),rep); 
Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P); 
vec3 Pf1=Pf0-vec3(1.0); 
vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}
/* END FUNCTION */
float turbulence( vec3 p ) {float w=100.0;float t=-.5;for (float f=1.0 ; f<=10.0 ; f++ ){float power=pow( 2.0,f );t+=abs( pnoise( vec3( power*p ),vec3( 10.0,10.0,10.0 ) )/power );}
return t;}
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
vec4 colorUpdated=color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
#ifdef NORMAL
noise=10.0* -.10*turbulence( .5*normal+time*1.15 );float b=lowFrequencySpeed*5.0*pnoise( 0.05*position +vec3(time*1.025),vec3( 100.0 ) );float displacement=- 1.5*noise+b;vec3 newPosition=position+normal*displacement;gl_Position=viewProjection*finalWorld*vec4( newPosition,1.0 );vec4 worldPos=finalWorld*vec4(newPosition,1.0);vPositionW=vec3(worldPos);vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#include<logDepthVertex>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}`;C.ShadersStore[As]||(C.ShadersStore[As]=en);class tn extends Se{constructor(){super(),this.DIFFUSE=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.LIGHT0=!1,this.LIGHT1=!1,this.LIGHT2=!1,this.LIGHT3=!1,this.SPOTLIGHT0=!1,this.SPOTLIGHT1=!1,this.SPOTLIGHT2=!1,this.SPOTLIGHT3=!1,this.HEMILIGHT0=!1,this.HEMILIGHT1=!1,this.HEMILIGHT2=!1,this.HEMILIGHT3=!1,this.DIRLIGHT0=!1,this.DIRLIGHT1=!1,this.DIRLIGHT2=!1,this.DIRLIGHT3=!1,this.POINTLIGHT0=!1,this.POINTLIGHT1=!1,this.POINTLIGHT2=!1,this.POINTLIGHT3=!1,this.SHADOW0=!1,this.SHADOW1=!1,this.SHADOW2=!1,this.SHADOW3=!1,this.SHADOWS=!1,this.SHADOWESM0=!1,this.SHADOWESM1=!1,this.SHADOWESM2=!1,this.SHADOWESM3=!1,this.SHADOWPOISSON0=!1,this.SHADOWPOISSON1=!1,this.SHADOWPOISSON2=!1,this.SHADOWPOISSON3=!1,this.SHADOWPCF0=!1,this.SHADOWPCF1=!1,this.SHADOWPCF2=!1,this.SHADOWPCF3=!1,this.SHADOWPCSS0=!1,this.SHADOWPCSS1=!1,this.SHADOWPCSS2=!1,this.SHADOWPCSS3=!1,this.NORMAL=!1,this.UV1=!1,this.UV2=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.UNLIT=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.LOGARITHMICDEPTH=!1,this.AREALIGHTSUPPORTED=!0,this.AREALIGHTNOROUGHTNESS=!0,this.rebuild()}}class Y extends ge{constructor(e,i){super(e,i),this.speed=1,this.movingSpeed=1,this.lowFrequencySpeed=1,this.fogDensity=.15,this._lastTime=0,this.diffuseColor=new N(1,1,1),this._disableLighting=!1,this._unlit=!1,this._maxSimultaneousLights=4,this._scaledDiffuse=new N}needAlphaBlending(){return this.alpha<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(e,i,a){const s=i._drawWrapper;if(this.isFrozen&&s.effect&&s._wasPreviouslyReady&&s._wasPreviouslyUsingInstances===a)return!0;i.materialDefines||(i.materialDefines=new tn);const r=i.materialDefines,n=this.getScene();if(this._isReadyForSubMesh(i))return!0;const o=n.getEngine();if(r._areTexturesDirty&&(r._needUVs=!1,n.texturesEnabled&&this._diffuseTexture&&U.DiffuseTextureEnabled))if(this._diffuseTexture.isReady())r._needUVs=!0,r.DIFFUSE=!0;else return!1;if(Pe(e,n,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this.needAlphaTestingForMesh(e),r),r._needNormals=!0,Ve(n,e,r,!1,this._maxSimultaneousLights,this._disableLighting),Ce(n,o,this,r,!!a),ve(e,r,!0,!0),r.isDirty){r.markAsProcessed(),n.resetCachedMaterial();const f=new Ae;r.FOG&&f.addFallback(1,"FOG"),Be(r,f),r.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e),r.IMAGEPROCESSINGPOSTPROCESS=n.imageProcessingConfiguration.applyByPostProcess;const l=[P.PositionKind];r.NORMAL&&l.push(P.NormalKind),r.UV1&&l.push(P.UVKind),r.UV2&&l.push(P.UV2Kind),r.VERTEXCOLOR&&l.push(P.ColorKind),Oe(l,e,r,f),Ne(l,r);const c="lava",u=r.toString(),h=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","diffuseMatrix","logarithmicDepthConstant","time","speed","movingSpeed","fogColor","fogDensity","lowFrequencySpeed"];_e(h);const m=["diffuseSampler","noiseTexture","areaLightsLTC1Sampler","areaLightsLTC2Sampler"],g=[];ze({uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:r,maxSimultaneousLights:this.maxSimultaneousLights}),i.setEffect(n.getEngine().createEffect(c,{attributes:l,uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},o),r,this._materialContext)}if(r.AREALIGHTUSED){for(let f=0;f<e.lightSources.length;f++)if(!e.lightSources[f]._isReady())return!1}return!i.effect||!i.effect.isReady()?!1:(r._renderId=n.getRenderId(),s._wasPreviouslyReady=!0,s._wasPreviouslyUsingInstances=!!a,!0)}bindForSubMesh(e,i,a){const s=this.getScene(),r=a.materialDefines;if(!r)return;const n=a.effect;n&&(this._activeEffect=n,r.UNLIT=this._unlit,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),De(i,this._activeEffect),this._mustRebind(s,n,a)&&(this.diffuseTexture&&U.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this.diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this.diffuseTexture.coordinatesIndex,this.diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this.diffuseTexture.getTextureMatrix())),this.noiseTexture&&this._activeEffect.setTexture("noiseTexture",this.noiseTexture),pe(n,this,s),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&he(r,n,s),s.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this._scaledDiffuse,this.alpha*i.visibility),s.lightsEnabled&&!this.disableLighting&&ke(s,i,this._activeEffect,r),s.fogEnabled&&i.applyFog&&s.fogMode!==ne.FOGMODE_NONE&&this._activeEffect.setMatrix("view",s.getViewMatrix()),xe(s,i,this._activeEffect),this._lastTime+=s.getEngine().getDeltaTime(),this._activeEffect.setFloat("time",this._lastTime*this.speed/1e3),this.fogColor||(this.fogColor=N.Black()),this._activeEffect.setColor3("fogColor",this.fogColor),this._activeEffect.setFloat("fogDensity",this.fogDensity),this._activeEffect.setFloat("lowFrequencySpeed",this.lowFrequencySpeed),this._activeEffect.setFloat("movingSpeed",this.movingSpeed),this._afterBind(i,this._activeEffect,a))}getAnimatables(){const e=[];return this.diffuseTexture&&this.diffuseTexture.animations&&this.diffuseTexture.animations.length>0&&e.push(this.diffuseTexture),this.noiseTexture&&this.noiseTexture.animations&&this.noiseTexture.animations.length>0&&e.push(this.noiseTexture),e}getActiveTextures(){const e=super.getActiveTextures();return this._diffuseTexture&&e.push(this._diffuseTexture),e}hasTexture(e){return!!(super.hasTexture(e)||this.diffuseTexture===e)}dispose(e){this.diffuseTexture&&this.diffuseTexture.dispose(),this.noiseTexture&&this.noiseTexture.dispose(),super.dispose(e)}clone(e){return V.Clone(()=>new Y(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.LavaMaterial",e}getClassName(){return"LavaMaterial"}static Parse(e,i,a){return V.Parse(()=>new Y(e.name,i),e,i,a)}}d([w("diffuseTexture")],Y.prototype,"_diffuseTexture",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],Y.prototype,"diffuseTexture",void 0);d([w()],Y.prototype,"noiseTexture",void 0);d([X()],Y.prototype,"fogColor",void 0);d([T()],Y.prototype,"speed",void 0);d([T()],Y.prototype,"movingSpeed",void 0);d([T()],Y.prototype,"lowFrequencySpeed",void 0);d([T()],Y.prototype,"fogDensity",void 0);d([X()],Y.prototype,"diffuseColor",void 0);d([T("disableLighting")],Y.prototype,"_disableLighting",void 0);d([y("_markAllSubMeshesAsLightsDirty")],Y.prototype,"disableLighting",void 0);d([T("unlit")],Y.prototype,"_unlit",void 0);d([y("_markAllSubMeshesAsLightsDirty")],Y.prototype,"unlit",void 0);d([T("maxSimultaneousLights")],Y.prototype,"_maxSimultaneousLights",void 0);d([y("_markAllSubMeshesAsLightsDirty")],Y.prototype,"maxSimultaneousLights",void 0);oe("BABYLON.LavaMaterial",Y);const Ns="mixPixelShader",sn=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;
#ifdef SPECULARTERM
uniform vec4 vSpecularColor;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#ifdef DIFFUSE
varying vec2 vTextureUV;uniform sampler2D mixMap1Sampler;uniform vec2 vTextureInfos;
#ifdef MIXMAP2
uniform sampler2D mixMap2Sampler;
#endif
uniform sampler2D diffuse1Sampler;uniform sampler2D diffuse2Sampler;uniform sampler2D diffuse3Sampler;uniform sampler2D diffuse4Sampler;uniform vec2 diffuse1Infos;uniform vec2 diffuse2Infos;uniform vec2 diffuse3Infos;uniform vec2 diffuse4Infos;
#ifdef MIXMAP2
uniform sampler2D diffuse5Sampler;uniform sampler2D diffuse6Sampler;uniform sampler2D diffuse7Sampler;uniform sampler2D diffuse8Sampler;uniform vec2 diffuse5Infos;uniform vec2 diffuse6Infos;uniform vec2 diffuse7Infos;uniform vec2 diffuse8Infos;
#endif
#endif
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 finalMixColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;
#ifdef MIXMAP2
vec4 mixColor2=vec4(1.,1.,1.,1.);
#endif
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;vec3 specularColor=vSpecularColor.rgb;
#else
float glossiness=0.;
#endif
float alpha=vDiffuseColor.a;
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef DIFFUSE
vec4 mixColor=texture2D(mixMap1Sampler,vTextureUV);
#include<depthPrePass>
mixColor.rgb*=vTextureInfos.y;vec4 diffuse1Color=texture2D(diffuse1Sampler,vTextureUV*diffuse1Infos);vec4 diffuse2Color=texture2D(diffuse2Sampler,vTextureUV*diffuse2Infos);vec4 diffuse3Color=texture2D(diffuse3Sampler,vTextureUV*diffuse3Infos);vec4 diffuse4Color=texture2D(diffuse4Sampler,vTextureUV*diffuse4Infos);diffuse1Color.rgb*=mixColor.r;diffuse2Color.rgb=mix(diffuse1Color.rgb,diffuse2Color.rgb,mixColor.g);diffuse3Color.rgb=mix(diffuse2Color.rgb,diffuse3Color.rgb,mixColor.b);finalMixColor.rgb=mix(diffuse3Color.rgb,diffuse4Color.rgb,1.0-mixColor.a);
#ifdef MIXMAP2
mixColor=texture2D(mixMap2Sampler,vTextureUV);mixColor.rgb*=vTextureInfos.y;vec4 diffuse5Color=texture2D(diffuse5Sampler,vTextureUV*diffuse5Infos);vec4 diffuse6Color=texture2D(diffuse6Sampler,vTextureUV*diffuse6Infos);vec4 diffuse7Color=texture2D(diffuse7Sampler,vTextureUV*diffuse7Infos);vec4 diffuse8Color=texture2D(diffuse8Sampler,vTextureUV*diffuse8Infos);diffuse5Color.rgb=mix(finalMixColor.rgb,diffuse5Color.rgb,mixColor.r);diffuse6Color.rgb=mix(diffuse5Color.rgb,diffuse6Color.rgb,mixColor.g);diffuse7Color.rgb=mix(diffuse6Color.rgb,diffuse7Color.rgb,mixColor.b);finalMixColor.rgb=mix(diffuse7Color.rgb,diffuse8Color.rgb,1.0-mixColor.a);
#endif
#endif
#ifdef VERTEXCOLOR
finalMixColor.rgb*=vColor.rgb;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#else
vec3 finalSpecular=vec3(0.0);
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor*finalMixColor.rgb,0.0,1.0);vec4 color=vec4(finalDiffuse+finalSpecular,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;C.ShadersStore[Ns]||(C.ShadersStore[Ns]=sn);const ws="mixVertexShader",rn=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vTextureUV;uniform mat4 textureMatrix;uniform vec2 vTextureInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
vec4 colorUpdated=color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vTextureInfos.x==0.)
{vTextureUV=vec2(textureMatrix*vec4(uv,1.0,0.0));}
else
{vTextureUV=vec2(textureMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;C.ShadersStore[ws]||(C.ShadersStore[ws]=rn);class an extends Se{constructor(){super(),this.DIFFUSE=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.SPECULARTERM=!1,this.NORMAL=!1,this.UV1=!1,this.UV2=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.MIXMAP2=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.LOGARITHMICDEPTH=!1,this.rebuild()}}class R extends ge{constructor(e,i){super(e,i),this.diffuseColor=new N(1,1,1),this.specularColor=new N(0,0,0),this.specularPower=64,this._disableLighting=!1,this._maxSimultaneousLights=4}needAlphaBlending(){return this.alpha<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(e,i,a){const s=i._drawWrapper;if(this.isFrozen&&s.effect&&s._wasPreviouslyReady&&s._wasPreviouslyUsingInstances===a)return!0;i.materialDefines||(i.materialDefines=new an);const r=i.materialDefines,n=this.getScene();if(this._isReadyForSubMesh(i))return!0;const o=n.getEngine();if(n.texturesEnabled&&(!this._mixTexture1||!this._mixTexture1.isReady()||(r._needUVs=!0,U.DiffuseTextureEnabled&&(!this._diffuseTexture1||!this._diffuseTexture1.isReady()||(r.DIFFUSE=!0,!this._diffuseTexture2||!this._diffuseTexture2.isReady())||!this._diffuseTexture3||!this._diffuseTexture3.isReady()||!this._diffuseTexture4||!this._diffuseTexture4.isReady()||this._mixTexture2&&(!this._mixTexture2.isReady()||(r.MIXMAP2=!0,!this._diffuseTexture5||!this._diffuseTexture5.isReady())||!this._diffuseTexture6||!this._diffuseTexture6.isReady()||!this._diffuseTexture7||!this._diffuseTexture7.isReady()||!this._diffuseTexture8||!this._diffuseTexture8.isReady())))))return!1;if(Pe(e,n,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this.needAlphaTestingForMesh(e),r),r._needNormals=Ve(n,e,r,!1,this._maxSimultaneousLights,this._disableLighting),Ce(n,o,this,r,!!a),ve(e,r,!0,!0),r.isDirty){r.markAsProcessed(),n.resetCachedMaterial();const f=new Ae;r.FOG&&f.addFallback(1,"FOG"),Be(r,f,this.maxSimultaneousLights),r.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e),r.IMAGEPROCESSINGPOSTPROCESS=n.imageProcessingConfiguration.applyByPostProcess;const l=[P.PositionKind];r.NORMAL&&l.push(P.NormalKind),r.UV1&&l.push(P.UVKind),r.UV2&&l.push(P.UV2Kind),r.VERTEXCOLOR&&l.push(P.ColorKind),Oe(l,e,r,f),Ne(l,r);const c="mix",u=r.toString(),h=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vSpecularColor","vFogInfos","vFogColor","pointSize","vTextureInfos","mBones","textureMatrix","logarithmicDepthConstant","diffuse1Infos","diffuse2Infos","diffuse3Infos","diffuse4Infos","diffuse5Infos","diffuse6Infos","diffuse7Infos","diffuse8Infos"],m=["mixMap1Sampler","mixMap2Sampler","diffuse1Sampler","diffuse2Sampler","diffuse3Sampler","diffuse4Sampler","diffuse5Sampler","diffuse6Sampler","diffuse7Sampler","diffuse8Sampler"],g=[];_e(h),ze({uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:r,maxSimultaneousLights:this.maxSimultaneousLights}),i.setEffect(n.getEngine().createEffect(c,{attributes:l,uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},o),r,this._materialContext)}return!i.effect||!i.effect.isReady()?!1:(r._renderId=n.getRenderId(),s._wasPreviouslyReady=!0,s._wasPreviouslyUsingInstances=!!a,!0)}bindForSubMesh(e,i,a){const s=this.getScene(),r=a.materialDefines;if(!r)return;const n=a.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),De(i,this._activeEffect),this._mustRebind(s,n,a)&&(this._mixTexture1&&(this._activeEffect.setTexture("mixMap1Sampler",this._mixTexture1),this._activeEffect.setFloat2("vTextureInfos",this._mixTexture1.coordinatesIndex,this._mixTexture1.level),this._activeEffect.setMatrix("textureMatrix",this._mixTexture1.getTextureMatrix()),U.DiffuseTextureEnabled&&(this._diffuseTexture1&&(this._activeEffect.setTexture("diffuse1Sampler",this._diffuseTexture1),this._activeEffect.setFloat2("diffuse1Infos",this._diffuseTexture1.uScale,this._diffuseTexture1.vScale)),this._diffuseTexture2&&(this._activeEffect.setTexture("diffuse2Sampler",this._diffuseTexture2),this._activeEffect.setFloat2("diffuse2Infos",this._diffuseTexture2.uScale,this._diffuseTexture2.vScale)),this._diffuseTexture3&&(this._activeEffect.setTexture("diffuse3Sampler",this._diffuseTexture3),this._activeEffect.setFloat2("diffuse3Infos",this._diffuseTexture3.uScale,this._diffuseTexture3.vScale)),this._diffuseTexture4&&(this._activeEffect.setTexture("diffuse4Sampler",this._diffuseTexture4),this._activeEffect.setFloat2("diffuse4Infos",this._diffuseTexture4.uScale,this._diffuseTexture4.vScale)))),this._mixTexture2&&(this._activeEffect.setTexture("mixMap2Sampler",this._mixTexture2),U.DiffuseTextureEnabled&&(this._diffuseTexture5&&(this._activeEffect.setTexture("diffuse5Sampler",this._diffuseTexture5),this._activeEffect.setFloat2("diffuse5Infos",this._diffuseTexture5.uScale,this._diffuseTexture5.vScale)),this._diffuseTexture6&&(this._activeEffect.setTexture("diffuse6Sampler",this._diffuseTexture6),this._activeEffect.setFloat2("diffuse6Infos",this._diffuseTexture6.uScale,this._diffuseTexture6.vScale)),this._diffuseTexture7&&(this._activeEffect.setTexture("diffuse7Sampler",this._diffuseTexture7),this._activeEffect.setFloat2("diffuse7Infos",this._diffuseTexture7.uScale,this._diffuseTexture7.vScale)),this._diffuseTexture8&&(this._activeEffect.setTexture("diffuse8Sampler",this._diffuseTexture8),this._activeEffect.setFloat2("diffuse8Infos",this._diffuseTexture8.uScale,this._diffuseTexture8.vScale)))),pe(n,this,s),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&he(r,n,s),s.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*i.visibility),r.SPECULARTERM&&this._activeEffect.setColor4("vSpecularColor",this.specularColor,this.specularPower),s.lightsEnabled&&!this.disableLighting&&ke(s,i,this._activeEffect,r,this.maxSimultaneousLights),s.fogEnabled&&i.applyFog&&s.fogMode!==ne.FOGMODE_NONE&&this._activeEffect.setMatrix("view",s.getViewMatrix()),xe(s,i,this._activeEffect),this._afterBind(i,this._activeEffect,a))}getAnimatables(){const e=[];return this._mixTexture1&&this._mixTexture1.animations&&this._mixTexture1.animations.length>0&&e.push(this._mixTexture1),this._mixTexture2&&this._mixTexture2.animations&&this._mixTexture2.animations.length>0&&e.push(this._mixTexture2),e}getActiveTextures(){const e=super.getActiveTextures();return this._mixTexture1&&e.push(this._mixTexture1),this._diffuseTexture1&&e.push(this._diffuseTexture1),this._diffuseTexture2&&e.push(this._diffuseTexture2),this._diffuseTexture3&&e.push(this._diffuseTexture3),this._diffuseTexture4&&e.push(this._diffuseTexture4),this._mixTexture2&&e.push(this._mixTexture2),this._diffuseTexture5&&e.push(this._diffuseTexture5),this._diffuseTexture6&&e.push(this._diffuseTexture6),this._diffuseTexture7&&e.push(this._diffuseTexture7),this._diffuseTexture8&&e.push(this._diffuseTexture8),e}hasTexture(e){return!!(super.hasTexture(e)||this._mixTexture1===e||this._diffuseTexture1===e||this._diffuseTexture2===e||this._diffuseTexture3===e||this._diffuseTexture4===e||this._mixTexture2===e||this._diffuseTexture5===e||this._diffuseTexture6===e||this._diffuseTexture7===e||this._diffuseTexture8===e)}dispose(e){this._mixTexture1&&this._mixTexture1.dispose(),super.dispose(e)}clone(e){return V.Clone(()=>new R(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.MixMaterial",e}getClassName(){return"MixMaterial"}static Parse(e,i,a){return V.Parse(()=>new R(e.name,i),e,i,a)}}d([w("mixTexture1")],R.prototype,"_mixTexture1",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],R.prototype,"mixTexture1",void 0);d([w("mixTexture2")],R.prototype,"_mixTexture2",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],R.prototype,"mixTexture2",void 0);d([w("diffuseTexture1")],R.prototype,"_diffuseTexture1",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],R.prototype,"diffuseTexture1",void 0);d([w("diffuseTexture2")],R.prototype,"_diffuseTexture2",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],R.prototype,"diffuseTexture2",void 0);d([w("diffuseTexture3")],R.prototype,"_diffuseTexture3",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],R.prototype,"diffuseTexture3",void 0);d([w("diffuseTexture4")],R.prototype,"_diffuseTexture4",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],R.prototype,"diffuseTexture4",void 0);d([w("diffuseTexture1")],R.prototype,"_diffuseTexture5",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],R.prototype,"diffuseTexture5",void 0);d([w("diffuseTexture2")],R.prototype,"_diffuseTexture6",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],R.prototype,"diffuseTexture6",void 0);d([w("diffuseTexture3")],R.prototype,"_diffuseTexture7",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],R.prototype,"diffuseTexture7",void 0);d([w("diffuseTexture4")],R.prototype,"_diffuseTexture8",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],R.prototype,"diffuseTexture8",void 0);d([X()],R.prototype,"diffuseColor",void 0);d([X()],R.prototype,"specularColor",void 0);d([T()],R.prototype,"specularPower",void 0);d([T("disableLighting")],R.prototype,"_disableLighting",void 0);d([y("_markAllSubMeshesAsLightsDirty")],R.prototype,"disableLighting",void 0);d([T("maxSimultaneousLights")],R.prototype,"_maxSimultaneousLights",void 0);d([y("_markAllSubMeshesAsLightsDirty")],R.prototype,"maxSimultaneousLights",void 0);oe("BABYLON.MixMaterial",R);const Is="normalPixelShader",nn=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef LIGHTING
#include<helperFunctions>
#include<__decl__lightFragment>[0]
#include<__decl__lightFragment>[1]
#include<__decl__lightFragment>[2]
#include<__decl__lightFragment>[3]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#endif
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef DIFFUSE
baseColor=texture2D(diffuseSampler,vDiffuseUV);
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef NORMAL
baseColor=mix(baseColor,vec4(vNormalW,1.0),0.5);
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef LIGHTING
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#include<lightFragment>[0]
#include<lightFragment>[1]
#include<lightFragment>[2]
#include<lightFragment>[3]
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;
#else
vec3 finalDiffuse= baseColor.rgb;
#endif
vec4 color=vec4(finalDiffuse,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;C.ShadersStore[Is]||(C.ShadersStore[Is]=nn);const bs="normalVertexShader",on=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;C.ShadersStore[bs]||(C.ShadersStore[bs]=on);class fn extends Se{constructor(){super(),this.DIFFUSE=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.LIGHT0=!1,this.LIGHT1=!1,this.LIGHT2=!1,this.LIGHT3=!1,this.SPOTLIGHT0=!1,this.SPOTLIGHT1=!1,this.SPOTLIGHT2=!1,this.SPOTLIGHT3=!1,this.HEMILIGHT0=!1,this.HEMILIGHT1=!1,this.HEMILIGHT2=!1,this.HEMILIGHT3=!1,this.DIRLIGHT0=!1,this.DIRLIGHT1=!1,this.DIRLIGHT2=!1,this.DIRLIGHT3=!1,this.POINTLIGHT0=!1,this.POINTLIGHT1=!1,this.POINTLIGHT2=!1,this.POINTLIGHT3=!1,this.SHADOW0=!1,this.SHADOW1=!1,this.SHADOW2=!1,this.SHADOW3=!1,this.SHADOWS=!1,this.SHADOWESM0=!1,this.SHADOWESM1=!1,this.SHADOWESM2=!1,this.SHADOWESM3=!1,this.SHADOWPOISSON0=!1,this.SHADOWPOISSON1=!1,this.SHADOWPOISSON2=!1,this.SHADOWPOISSON3=!1,this.SHADOWPCF0=!1,this.SHADOWPCF1=!1,this.SHADOWPCF2=!1,this.SHADOWPCF3=!1,this.SHADOWPCSS0=!1,this.SHADOWPCSS1=!1,this.SHADOWPCSS2=!1,this.SHADOWPCSS3=!1,this.NORMAL=!1,this.UV1=!1,this.UV2=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.THIN_INSTANCES=!1,this.LIGHTING=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.LOGARITHMICDEPTH=!1,this.AREALIGHTSUPPORTED=!0,this.AREALIGHTNOROUGHTNESS=!0,this.rebuild()}}class Ge extends ge{constructor(e,i){super(e,i),this.diffuseColor=new N(1,1,1),this._disableLighting=!1,this._maxSimultaneousLights=4}needAlphaBlending(){return this.alpha<1}needAlphaBlendingForMesh(e){return this.needAlphaBlending()||e.visibility<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(e,i,a){const s=i._drawWrapper;if(this.isFrozen&&s.effect&&s._wasPreviouslyReady&&s._wasPreviouslyUsingInstances===a)return!0;i.materialDefines||(i.materialDefines=new fn);const r=i.materialDefines,n=this.getScene();if(this._isReadyForSubMesh(i))return!0;const o=n.getEngine();if(r._areTexturesDirty&&(r._needUVs=!1,n.texturesEnabled&&this._diffuseTexture&&U.DiffuseTextureEnabled))if(this._diffuseTexture.isReady())r._needUVs=!0,r.DIFFUSE=!0;else return!1;if(Pe(e,n,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this.needAlphaTestingForMesh(e),r),r._needNormals=!0,Ve(n,e,r,!1,this._maxSimultaneousLights,this._disableLighting),Ce(n,o,this,r,!!a,null,i.getRenderingMesh().hasThinInstances),r.LIGHTING=!this._disableLighting,ve(e,r,!0,!0),r.isDirty){r.markAsProcessed(),n.resetCachedMaterial();const f=new Ae;r.FOG&&f.addFallback(1,"FOG"),Be(r,f),r.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e),r.IMAGEPROCESSINGPOSTPROCESS=n.imageProcessingConfiguration.applyByPostProcess;const l=[P.PositionKind];r.NORMAL&&l.push(P.NormalKind),r.UV1&&l.push(P.UVKind),r.UV2&&l.push(P.UV2Kind),Oe(l,e,r,f),Ne(l,r);const c="normal",u=r.toString(),h=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","diffuseMatrix","logarithmicDepthConstant"],m=["diffuseSampler","areaLightsLTC1Sampler","areaLightsLTC2Sampler"],g=[];_e(h),ze({uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:r,maxSimultaneousLights:4}),i.setEffect(n.getEngine().createEffect(c,{attributes:l,uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},o),r,this._materialContext)}if(r.AREALIGHTUSED){for(let f=0;f<e.lightSources.length;f++)if(!e.lightSources[f]._isReady())return!1}return!i.effect||!i.effect.isReady()?!1:(r._renderId=n.getRenderId(),s._wasPreviouslyReady=!0,s._wasPreviouslyUsingInstances=!!a,!0)}bindForSubMesh(e,i,a){const s=this.getScene(),r=a.materialDefines;if(!r)return;const n=a.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),De(i,this._activeEffect),this._mustRebind(s,n,a)&&(this.diffuseTexture&&U.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this.diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this.diffuseTexture.coordinatesIndex,this.diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this.diffuseTexture.getTextureMatrix())),pe(n,this,s),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&he(r,n,s),s.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*i.visibility),s.lightsEnabled&&!this.disableLighting&&ke(s,i,this._activeEffect,r),s.fogEnabled&&i.applyFog&&s.fogMode!==ne.FOGMODE_NONE&&this._activeEffect.setMatrix("view",s.getViewMatrix()),xe(s,i,this._activeEffect),this._afterBind(i,this._activeEffect,a))}getAnimatables(){const e=[];return this.diffuseTexture&&this.diffuseTexture.animations&&this.diffuseTexture.animations.length>0&&e.push(this.diffuseTexture),e}getActiveTextures(){const e=super.getActiveTextures();return this._diffuseTexture&&e.push(this._diffuseTexture),e}hasTexture(e){return!!(super.hasTexture(e)||this.diffuseTexture===e)}dispose(e){this.diffuseTexture&&this.diffuseTexture.dispose(),super.dispose(e)}clone(e){return V.Clone(()=>new Ge(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.NormalMaterial",e}getClassName(){return"NormalMaterial"}static Parse(e,i,a){return V.Parse(()=>new Ge(e.name,i),e,i,a)}}d([w("diffuseTexture")],Ge.prototype,"_diffuseTexture",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],Ge.prototype,"diffuseTexture",void 0);d([X()],Ge.prototype,"diffuseColor",void 0);d([T("disableLighting")],Ge.prototype,"_disableLighting",void 0);d([y("_markAllSubMeshesAsLightsDirty")],Ge.prototype,"disableLighting",void 0);d([T("maxSimultaneousLights")],Ge.prototype,"_maxSimultaneousLights",void 0);d([y("_markAllSubMeshesAsLightsDirty")],Ge.prototype,"maxSimultaneousLights",void 0);oe("BABYLON.NormalMaterial",Ge);const Ls="shadowOnlyPixelShader",ln=`precision highp float;uniform vec4 vEyePosition;uniform float alpha;uniform vec3 shadowColor;varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#include<lightFragment>[0..1]
vec4 color=vec4(shadowColor,(1.0-clamp(shadow,0.,1.))*alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;C.ShadersStore[Ls]||(C.ShadersStore[Ls]=ln);const Rs="shadowOnlyVertexShader",hn=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;C.ShadersStore[Rs]||(C.ShadersStore[Rs]=hn);class un extends Se{constructor(){super(),this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.POINTSIZE=!1,this.FOG=!1,this.NORMAL=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.LOGARITHMICDEPTH=!1,this.rebuild()}}class ci extends ge{constructor(e,i){super(e,i),this._needAlphaBlending=!0,this.shadowColor=N.Black()}needAlphaBlending(){return this._needAlphaBlending}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}get activeLight(){return this._activeLight}set activeLight(e){this._activeLight=e}_getFirstShadowLightForMesh(e){for(const i of e.lightSources)if(i.shadowEnabled)return i;return null}isReadyForSubMesh(e,i,a){const s=i._drawWrapper;if(this.isFrozen&&s.effect&&s._wasPreviouslyReady&&s._wasPreviouslyUsingInstances===a)return!0;i.materialDefines||(i.materialDefines=new un);const r=i.materialDefines,n=this.getScene();if(this._isReadyForSubMesh(i))return!0;const o=n.getEngine();if(this._activeLight){for(const l of e.lightSources)if(l.shadowEnabled){if(this._activeLight===l)break;const c=e.lightSources.indexOf(this._activeLight);c!==-1&&(e.lightSources.splice(c,1),e.lightSources.splice(0,0,this._activeLight));break}}Ce(n,o,this,r,!!a),Pe(e,n,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this.needAlphaTestingForMesh(e),r),r._needNormals=Ve(n,e,r,!1,1);const f=this._getFirstShadowLightForMesh(e)?.getShadowGenerator();if(this._needAlphaBlending=!0,f&&f.getClassName&&f.getClassName()==="CascadedShadowGenerator"){const l=f;this._needAlphaBlending=!l.autoCalcDepthBounds}if(ve(e,r,!1,!0),r.isDirty){r.markAsProcessed(),n.resetCachedMaterial();const l=new Ae;r.FOG&&l.addFallback(1,"FOG"),Be(r,l,1),r.NUM_BONE_INFLUENCERS>0&&l.addCPUSkinningFallback(0,e),r.IMAGEPROCESSINGPOSTPROCESS=n.imageProcessingConfiguration.applyByPostProcess;const c=[P.PositionKind];r.NORMAL&&c.push(P.NormalKind),Oe(c,e,r,l),Ne(c,r);const u="shadowOnly",h=r.toString(),m=["world","view","viewProjection","vEyePosition","vLightsType","vFogInfos","vFogColor","pointSize","alpha","shadowColor","mBones","logarithmicDepthConstant"],g=[],v=[];_e(m),ze({uniformsNames:m,uniformBuffersNames:v,samplers:g,defines:r,maxSimultaneousLights:1}),i.setEffect(n.getEngine().createEffect(u,{attributes:c,uniformsNames:m,uniformBuffersNames:v,samplers:g,defines:h,fallbacks:l,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:1}},o),r,this._materialContext)}return!i.effect||!i.effect.isReady()?!1:(r._renderId=n.getRenderId(),s._wasPreviouslyReady=!0,s._wasPreviouslyUsingInstances=!!a,!0)}bindForSubMesh(e,i,a){const s=this.getScene(),r=a.materialDefines;if(!r)return;const n=a.effect;if(n){if(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),De(i,this._activeEffect),this._mustRebind(s,n,a)&&(pe(n,this,s),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._activeEffect.setFloat("alpha",this.alpha),this._activeEffect.setColor3("shadowColor",this.shadowColor),this._useLogarithmicDepth&&he(r,n,s),s.bindEyePosition(n)),s.lightsEnabled){ke(s,i,this._activeEffect,r,1);const o=this._getFirstShadowLightForMesh(i);o&&(o._renderId=-1)}(s.fogEnabled&&i.applyFog&&s.fogMode!==ne.FOGMODE_NONE||r.SHADOWCSM0)&&this._activeEffect.setMatrix("view",s.getViewMatrix()),xe(s,i,this._activeEffect),this._afterBind(i,this._activeEffect,a)}}clone(e){return V.Clone(()=>new ci(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.ShadowOnlyMaterial",e}getClassName(){return"ShadowOnlyMaterial"}static Parse(e,i,a){return V.Parse(()=>new ci(e.name,i),e,i,a)}}oe("BABYLON.ShadowOnlyMaterial",ci);const Os="simplePixelShader",cn=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef DIFFUSE
baseColor=texture2D(diffuseSampler,vDiffuseUV);
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vDiffuseInfos.y;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor.rgb*=vColor.rgb;
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif 
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;C.ShadersStore[Os]||(C.ShadersStore[Os]=cn);const Ds="simpleVertexShader",dn=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
vec4 colorUpdated=color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;C.ShadersStore[Ds]||(C.ShadersStore[Ds]=dn);class mn extends Se{constructor(){super(),this.DIFFUSE=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.NORMAL=!1,this.UV1=!1,this.UV2=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.LOGARITHMICDEPTH=!1,this.AREALIGHTSUPPORTED=!0,this.AREALIGHTNOROUGHTNESS=!0,this.rebuild()}}class Ue extends ge{constructor(e,i){super(e,i),this.diffuseColor=new N(1,1,1),this._disableLighting=!1,this._maxSimultaneousLights=4}needAlphaBlending(){return this.alpha<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(e,i,a){const s=i._drawWrapper;if(this.isFrozen&&s.effect&&s._wasPreviouslyReady&&s._wasPreviouslyUsingInstances===a)return!0;i.materialDefines||(i.materialDefines=new mn);const r=i.materialDefines,n=this.getScene();if(this._isReadyForSubMesh(i))return!0;const o=n.getEngine();if(r._areTexturesDirty&&(r._needUVs=!1,n.texturesEnabled&&this._diffuseTexture&&U.DiffuseTextureEnabled))if(this._diffuseTexture.isReady())r._needUVs=!0,r.DIFFUSE=!0;else return!1;if(Pe(e,n,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this.needAlphaTestingForMesh(e),r),r._needNormals=Ve(n,e,r,!1,this._maxSimultaneousLights,this._disableLighting),Ce(n,o,this,r,!!a),ve(e,r,!0,!0),r.isDirty){r.markAsProcessed(),n.resetCachedMaterial();const f=new Ae;r.FOG&&f.addFallback(1,"FOG"),Be(r,f,this.maxSimultaneousLights),r.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e),r.IMAGEPROCESSINGPOSTPROCESS=n.imageProcessingConfiguration.applyByPostProcess;const l=[P.PositionKind];r.NORMAL&&l.push(P.NormalKind),r.UV1&&l.push(P.UVKind),r.UV2&&l.push(P.UV2Kind),r.VERTEXCOLOR&&l.push(P.ColorKind),Oe(l,e,r,f),Ne(l,r);const c="simple",u=r.toString(),h=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","diffuseMatrix","logarithmicDepthConstant"],m=["diffuseSampler","areaLightsLTC1Sampler","areaLightsLTC2Sampler"],g=[];_e(h),ze({uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:r,maxSimultaneousLights:this.maxSimultaneousLights}),i.setEffect(n.getEngine().createEffect(c,{attributes:l,uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights-1}},o),r,this._materialContext)}if(r.AREALIGHTUSED){for(let f=0;f<e.lightSources.length;f++)if(!e.lightSources[f]._isReady())return!1}return!i.effect||!i.effect.isReady()?!1:(r._renderId=n.getRenderId(),s._wasPreviouslyReady=!0,s._wasPreviouslyUsingInstances=!!a,!0)}bindForSubMesh(e,i,a){const s=this.getScene(),r=a.materialDefines;if(!r)return;const n=a.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),De(i,this._activeEffect),this._mustRebind(s,n,a)&&(this._diffuseTexture&&U.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this._diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this._diffuseTexture.getTextureMatrix())),pe(n,this,s),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&he(r,n,s),s.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*i.visibility),s.lightsEnabled&&!this.disableLighting&&ke(s,i,this._activeEffect,r,this.maxSimultaneousLights),s.fogEnabled&&i.applyFog&&s.fogMode!==ne.FOGMODE_NONE&&this._activeEffect.setMatrix("view",s.getViewMatrix()),xe(s,i,this._activeEffect),this._afterBind(i,this._activeEffect,a))}getAnimatables(){const e=[];return this._diffuseTexture&&this._diffuseTexture.animations&&this._diffuseTexture.animations.length>0&&e.push(this._diffuseTexture),e}getActiveTextures(){const e=super.getActiveTextures();return this._diffuseTexture&&e.push(this._diffuseTexture),e}hasTexture(e){return!!(super.hasTexture(e)||this.diffuseTexture===e)}dispose(e){this._diffuseTexture&&this._diffuseTexture.dispose(),super.dispose(e)}clone(e){return V.Clone(()=>new Ue(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.SimpleMaterial",e}getClassName(){return"SimpleMaterial"}static Parse(e,i,a){return V.Parse(()=>new Ue(e.name,i),e,i,a)}}d([w("diffuseTexture")],Ue.prototype,"_diffuseTexture",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],Ue.prototype,"diffuseTexture",void 0);d([X("diffuse")],Ue.prototype,"diffuseColor",void 0);d([T("disableLighting")],Ue.prototype,"_disableLighting",void 0);d([y("_markAllSubMeshesAsLightsDirty")],Ue.prototype,"disableLighting",void 0);d([T("maxSimultaneousLights")],Ue.prototype,"_maxSimultaneousLights",void 0);d([y("_markAllSubMeshesAsLightsDirty")],Ue.prototype,"maxSimultaneousLights",void 0);oe("BABYLON.SimpleMaterial",Ue);const Fs="skyPixelShader",gn=`precision highp float;varying vec3 vPositionW;
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneFragmentDeclaration>
uniform vec3 cameraPosition;uniform vec3 cameraOffset;uniform vec3 up;uniform float luminance;uniform float turbidity;uniform float rayleigh;uniform float mieCoefficient;uniform float mieDirectionalG;uniform vec3 sunPosition;
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
const float e=2.71828182845904523536028747135266249775724709369995957;const float pi=3.141592653589793238462643383279502884197169;const float n=1.0003;const float N=2.545E25;const float pn=0.035;const vec3 lambda=vec3(680E-9,550E-9,450E-9);const vec3 K=vec3(0.686,0.678,0.666);const float v=4.0;const float rayleighZenithLength=8.4E3;const float mieZenithLength=1.25E3;const float EE=1000.0;const float sunAngularDiameterCos=0.999956676946448443553574619906976478926848692873900859324;const float cutoffAngle=pi/1.95;const float steepness=1.5;vec3 totalRayleigh(vec3 lambda)
{return (8.0*pow(pi,3.0)*pow(pow(n,2.0)-1.0,2.0)*(6.0+3.0*pn))/(3.0*N*pow(lambda,vec3(4.0))*(6.0-7.0*pn));}
vec3 simplifiedRayleigh()
{return 0.0005/vec3(94,40,18);}
float rayleighPhase(float cosTheta)
{ 
return (3.0/(16.0*pi))*(1.0+pow(cosTheta,2.0));}
vec3 totalMie(vec3 lambda,vec3 K,float T)
{float c=(0.2*T )*10E-18;return 0.434*c*pi*pow((2.0*pi)/lambda,vec3(v-2.0))*K;}
float hgPhase(float cosTheta,float g)
{return (1.0/(4.0*pi))*((1.0-pow(g,2.0))/pow(1.0-2.0*g*cosTheta+pow(g,2.0),1.5));}
float sunIntensity(float zenithAngleCos)
{return EE*max(0.0,1.0-exp((-(cutoffAngle-acos(zenithAngleCos))/steepness)));}
float A=0.15;float B=0.50;float C=0.10;float D=0.20;float EEE=0.02;float F=0.30;float W=1000.0;vec3 Uncharted2Tonemap(vec3 x)
{return ((x*(A*x+C*B)+D*EEE)/(x*(A*x+B)+D*F))-EEE/F;}
#if DITHER
#include<helperFunctions>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
/**
*--------------------------------------------------------------------------------------------------
* Sky Color
*--------------------------------------------------------------------------------------------------
*/
float sunfade=1.0-clamp(1.0-exp((sunPosition.y/450000.0)),0.0,1.0);float rayleighCoefficient=rayleigh-(1.0*(1.0-sunfade));vec3 sunDirection=normalize(sunPosition);float sunE=sunIntensity(dot(sunDirection,up));vec3 betaR=simplifiedRayleigh()*rayleighCoefficient;vec3 betaM=totalMie(lambda,K,turbidity)*mieCoefficient;float zenithAngle=acos(max(0.0,dot(up,normalize(vPositionW-cameraPosition+cameraOffset))));float sR=rayleighZenithLength/(cos(zenithAngle)+0.15*pow(93.885-((zenithAngle*180.0)/pi),-1.253));float sM=mieZenithLength/(cos(zenithAngle)+0.15*pow(93.885-((zenithAngle*180.0)/pi),-1.253));vec3 Fex=exp(-(betaR*sR+betaM*sM));float cosTheta=dot(normalize(vPositionW-cameraPosition),sunDirection);float rPhase=rayleighPhase(cosTheta*0.5+0.5);vec3 betaRTheta=betaR*rPhase;float mPhase=hgPhase(cosTheta,mieDirectionalG);vec3 betaMTheta=betaM*mPhase;vec3 Lin=pow(sunE*((betaRTheta+betaMTheta)/(betaR+betaM))*(1.0-Fex),vec3(1.5));Lin*=mix(vec3(1.0),pow(sunE*((betaRTheta+betaMTheta)/(betaR+betaM))*Fex,vec3(1.0/2.0)),clamp(pow(1.0-dot(up,sunDirection),5.0),0.0,1.0));vec3 direction=normalize(vPositionW-cameraPosition);float theta=acos(direction.y);float phi=atan(direction.z,direction.x);vec2 uv=vec2(phi,theta)/vec2(2.0*pi,pi)+vec2(0.5,0.0);vec3 L0=vec3(0.1)*Fex;float sundisk=smoothstep(sunAngularDiameterCos,sunAngularDiameterCos+0.00002,cosTheta);L0+=(sunE*19000.0*Fex)*sundisk;vec3 whiteScale=1.0/Uncharted2Tonemap(vec3(W));vec3 texColor=(Lin+L0);texColor*=0.04 ;texColor+=vec3(0.0,0.001,0.0025)*0.3;float g_fMaxLuminance=1.0;float fLumScaled=0.1/luminance; 
float fLumCompressed=(fLumScaled*(1.0+(fLumScaled/(g_fMaxLuminance*g_fMaxLuminance))))/(1.0+fLumScaled); 
float ExposureBias=fLumCompressed;vec3 curr=Uncharted2Tonemap((log2(2.0/pow(luminance,4.0)))*texColor);vec3 retColor=curr*whiteScale;/**
*--------------------------------------------------------------------------------------------------
* Sky Color
*--------------------------------------------------------------------------------------------------
*/
float alpha=1.0;
#ifdef VERTEXCOLOR
retColor.rgb*=vColor.rgb;
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#if DITHER
retColor.rgb+=dither(gl_FragCoord.xy,0.5);
#endif
vec4 color=clamp(vec4(retColor.rgb,alpha),0.0,1.0);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;C.ShadersStore[Fs]||(C.ShadersStore[Fs]=gn);const Gs="skyVertexShader",vn=`precision highp float;attribute vec3 position;
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
uniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<logDepthDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
gl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#ifdef VERTEXCOLOR
vColor=color;
#endif
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;C.ShadersStore[Gs]||(C.ShadersStore[Gs]=vn);class _n extends Se{constructor(){super(),this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.POINTSIZE=!1,this.FOG=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.DITHER=!1,this.LOGARITHMICDEPTH=!1,this.rebuild()}}class se extends ge{constructor(e,i){super(e,i),this.luminance=1,this.turbidity=10,this.rayleigh=2,this.mieCoefficient=.005,this.mieDirectionalG=.8,this.distance=500,this.inclination=.49,this.azimuth=.25,this.sunPosition=new Z(0,100,0),this.useSunPosition=!1,this.cameraOffset=Z.Zero(),this.up=Z.Up(),this.dithering=!1,this._cameraPosition=Z.Zero(),this._skyOrientation=new ss}needAlphaBlending(){return this.alpha<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(e,i){const a=i._drawWrapper;if(this.isFrozen&&a.effect&&a._wasPreviouslyReady)return!0;i.materialDefines||(i.materialDefines=new _n);const s=i.materialDefines,r=this.getScene();if(this._isReadyForSubMesh(i))return!0;if(Pe(e,r,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,!1,s),ve(e,s,!0,!1),s.IMAGEPROCESSINGPOSTPROCESS!==r.imageProcessingConfiguration.applyByPostProcess&&s.markAsMiscDirty(),s.DITHER!==this.dithering&&s.markAsMiscDirty(),s.isDirty){s.markAsProcessed(),r.resetCachedMaterial();const n=new Ae;s.FOG&&n.addFallback(1,"FOG"),s.IMAGEPROCESSINGPOSTPROCESS=r.imageProcessingConfiguration.applyByPostProcess,s.DITHER=this.dithering;const o=[P.PositionKind];s.VERTEXCOLOR&&o.push(P.ColorKind);const f="sky",l=["world","viewProjection","view","vFogInfos","vFogColor","logarithmicDepthConstant","pointSize","luminance","turbidity","rayleigh","mieCoefficient","mieDirectionalG","sunPosition","cameraPosition","cameraOffset","up"];_e(l);const c=s.toString();i.setEffect(r.getEngine().createEffect(f,o,l,[],c,n,this.onCompiled,this.onError),s,this._materialContext)}return!i.effect||!i.effect.isReady()?!1:(s._renderId=r.getRenderId(),a._wasPreviouslyReady=!0,!0)}bindForSubMesh(e,i,a){const s=this.getScene(),r=a.materialDefines;if(!r)return;const n=a.effect;if(!n)return;this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),this._mustRebind(s,n,a)&&(pe(n,this,s),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&he(r,n,s)),s.fogEnabled&&i.applyFog&&s.fogMode!==ne.FOGMODE_NONE&&this._activeEffect.setMatrix("view",s.getViewMatrix()),xe(s,i,this._activeEffect);const o=s.activeCamera;if(o){const f=o.getWorldMatrix();this._cameraPosition.x=f.m[12],this._cameraPosition.y=f.m[13],this._cameraPosition.z=f.m[14],this._activeEffect.setVector3("cameraPosition",this._cameraPosition)}if(this._activeEffect.setVector3("cameraOffset",this.cameraOffset),this._activeEffect.setVector3("up",this.up),this.luminance>0&&this._activeEffect.setFloat("luminance",this.luminance),this._activeEffect.setFloat("turbidity",this.turbidity),this._activeEffect.setFloat("rayleigh",this.rayleigh),this._activeEffect.setFloat("mieCoefficient",this.mieCoefficient),this._activeEffect.setFloat("mieDirectionalG",this.mieDirectionalG),!this.useSunPosition){const f=Math.PI*(this.inclination-.5),l=2*Math.PI*(this.azimuth-.5);this.sunPosition.x=this.distance*Math.cos(l)*Math.cos(f),this.sunPosition.y=this.distance*Math.sin(-f),this.sunPosition.z=this.distance*Math.sin(l)*Math.cos(f),ss.FromUnitVectorsToRef(Z.UpReadOnly,this.up,this._skyOrientation),this.sunPosition.rotateByQuaternionToRef(this._skyOrientation,this.sunPosition)}this._activeEffect.setVector3("sunPosition",this.sunPosition),this._afterBind(i,this._activeEffect,a)}getAnimatables(){return[]}dispose(e){super.dispose(e)}clone(e){return V.Clone(()=>new se(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.SkyMaterial",e}getClassName(){return"SkyMaterial"}static Parse(e,i,a){return V.Parse(()=>new se(e.name,i),e,i,a)}}d([T()],se.prototype,"luminance",void 0);d([T()],se.prototype,"turbidity",void 0);d([T()],se.prototype,"rayleigh",void 0);d([T()],se.prototype,"mieCoefficient",void 0);d([T()],se.prototype,"mieDirectionalG",void 0);d([T()],se.prototype,"distance",void 0);d([T()],se.prototype,"inclination",void 0);d([T()],se.prototype,"azimuth",void 0);d([Kt()],se.prototype,"sunPosition",void 0);d([T()],se.prototype,"useSunPosition",void 0);d([Kt()],se.prototype,"cameraOffset",void 0);d([Kt()],se.prototype,"up",void 0);d([T()],se.prototype,"dithering",void 0);oe("BABYLON.SkyMaterial",se);const Us="terrainPixelShader",pn=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;
#ifdef SPECULARTERM
uniform vec4 vSpecularColor;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#ifdef DIFFUSE
varying vec2 vTextureUV;uniform sampler2D textureSampler;uniform vec2 vTextureInfos;uniform sampler2D diffuse1Sampler;uniform sampler2D diffuse2Sampler;uniform sampler2D diffuse3Sampler;uniform vec2 diffuse1Infos;uniform vec2 diffuse2Infos;uniform vec2 diffuse3Infos;
#endif
#ifdef BUMP
uniform sampler2D bump1Sampler;uniform sampler2D bump2Sampler;uniform sampler2D bump3Sampler;
#endif
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#ifdef BUMP
#extension GL_OES_standard_derivatives : enable
mat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv)
{vec3 dp1=dFdx(p);vec3 dp2=dFdy(p);vec2 duv1=dFdx(uv);vec2 duv2=dFdy(uv);vec3 dp2perp=cross(dp2,normal);vec3 dp1perp=cross(normal,dp1);vec3 tangent=dp2perp*duv1.x+dp1perp*duv2.x;vec3 binormal=dp2perp*duv1.y+dp1perp*duv2.y;float invmax=inversesqrt(max(dot(tangent,tangent),dot(binormal,binormal)));return mat3(tangent*invmax,binormal*invmax,normal);}
vec3 perturbNormal(vec3 viewDir,vec3 mixColor)
{vec3 bump1Color=texture2D(bump1Sampler,vTextureUV*diffuse1Infos).xyz;vec3 bump2Color=texture2D(bump2Sampler,vTextureUV*diffuse2Infos).xyz;vec3 bump3Color=texture2D(bump3Sampler,vTextureUV*diffuse3Infos).xyz;bump1Color.rgb*=mixColor.r;bump2Color.rgb=mix(bump1Color.rgb,bump2Color.rgb,mixColor.g);vec3 map=mix(bump2Color.rgb,bump3Color.rgb,mixColor.b);map=map*255./127.-128./127.;mat3 TBN=cotangent_frame(vNormalW*vTextureInfos.y,-viewDir,vTextureUV);return normalize(TBN*map);}
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;vec3 specularColor=vSpecularColor.rgb;
#else
float glossiness=0.;
#endif
float alpha=vDiffuseColor.a;
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef DIFFUSE
baseColor=texture2D(textureSampler,vTextureUV);
#if defined(BUMP) && defined(DIFFUSE)
normalW=perturbNormal(viewDirectionW,baseColor.rgb);
#endif
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vTextureInfos.y;vec4 diffuse1Color=texture2D(diffuse1Sampler,vTextureUV*diffuse1Infos);vec4 diffuse2Color=texture2D(diffuse2Sampler,vTextureUV*diffuse2Infos);vec4 diffuse3Color=texture2D(diffuse3Sampler,vTextureUV*diffuse3Infos);diffuse1Color.rgb*=baseColor.r;diffuse2Color.rgb=mix(diffuse1Color.rgb,diffuse2Color.rgb,baseColor.g);baseColor.rgb=mix(diffuse2Color.rgb,diffuse3Color.rgb,baseColor.b);
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor.rgb*=vColor.rgb;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#else
vec3 finalSpecular=vec3(0.0);
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor*baseColor.rgb,0.0,1.0);vec4 color=vec4(finalDiffuse+finalSpecular,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;C.ShadersStore[Us]||(C.ShadersStore[Us]=pn);const Vs="terrainVertexShader",xn=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vTextureUV;uniform mat4 textureMatrix;uniform vec2 vTextureInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<logDepthDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
vec4 colorUpdated=color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vTextureInfos.x==0.)
{vTextureUV=vec2(textureMatrix*vec4(uv,1.0,0.0));}
else
{vTextureUV=vec2(textureMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;C.ShadersStore[Vs]||(C.ShadersStore[Vs]=xn);class Sn extends Se{constructor(){super(),this.DIFFUSE=!1,this.BUMP=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.SPECULARTERM=!1,this.NORMAL=!1,this.UV1=!1,this.UV2=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.LOGARITHMICDEPTH=!1,this.AREALIGHTSUPPORTED=!0,this.AREALIGHTNOROUGHTNESS=!0,this.rebuild()}}class B extends ge{constructor(e,i){super(e,i),this.diffuseColor=new N(1,1,1),this.specularColor=new N(0,0,0),this.specularPower=64,this._disableLighting=!1,this._maxSimultaneousLights=4}needAlphaBlending(){return this.alpha<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(e,i,a){const s=i._drawWrapper;if(this.isFrozen&&s.effect&&s._wasPreviouslyReady&&s._wasPreviouslyUsingInstances===a)return!0;i.materialDefines||(i.materialDefines=new Sn);const r=i.materialDefines,n=this.getScene();if(this._isReadyForSubMesh(i))return!0;const o=n.getEngine();if(n.texturesEnabled){if(!this.mixTexture||!this.mixTexture.isReady())return!1;if(r._needUVs=!0,U.DiffuseTextureEnabled){if(!this.diffuseTexture1||!this.diffuseTexture1.isReady()||!this.diffuseTexture2||!this.diffuseTexture2.isReady()||!this.diffuseTexture3||!this.diffuseTexture3.isReady())return!1;r.DIFFUSE=!0}if(this.bumpTexture1&&this.bumpTexture2&&this.bumpTexture3&&U.BumpTextureEnabled){if(!this.bumpTexture1.isReady()||!this.bumpTexture2.isReady()||!this.bumpTexture3.isReady())return!1;r._needNormals=!0,r.BUMP=!0}}if(Pe(e,n,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this.needAlphaTestingForMesh(e),r),r._needNormals=Ve(n,e,r,!1,this._maxSimultaneousLights,this._disableLighting),Ce(n,o,this,r,!!a),ve(e,r,!0,!0),r.isDirty){r.markAsProcessed(),n.resetCachedMaterial();const f=new Ae;r.FOG&&f.addFallback(1,"FOG"),Be(r,f,this.maxSimultaneousLights),r.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e),r.IMAGEPROCESSINGPOSTPROCESS=n.imageProcessingConfiguration.applyByPostProcess;const l=[P.PositionKind];r.NORMAL&&l.push(P.NormalKind),r.UV1&&l.push(P.UVKind),r.UV2&&l.push(P.UV2Kind),r.VERTEXCOLOR&&l.push(P.ColorKind),Oe(l,e,r,f),Ne(l,r);const c="terrain",u=r.toString(),h=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vSpecularColor","vFogInfos","vFogColor","pointSize","vTextureInfos","mBones","textureMatrix","diffuse1Infos","diffuse2Infos","diffuse3Infos"],m=["textureSampler","diffuse1Sampler","diffuse2Sampler","diffuse3Sampler","bump1Sampler","bump2Sampler","bump3Sampler","logarithmicDepthConstant","areaLightsLTC1Sampler","areaLightsLTC2Sampler"],g=[];_e(h),ze({uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:r,maxSimultaneousLights:this.maxSimultaneousLights}),i.setEffect(n.getEngine().createEffect(c,{attributes:l,uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},o),r,this._materialContext)}if(r.AREALIGHTUSED){for(let f=0;f<e.lightSources.length;f++)if(!e.lightSources[f]._isReady())return!1}return!i.effect||!i.effect.isReady()?!1:(r._renderId=n.getRenderId(),s._wasPreviouslyReady=!0,s._wasPreviouslyUsingInstances=!!a,!0)}bindForSubMesh(e,i,a){const s=this.getScene(),r=a.materialDefines;if(!r)return;const n=a.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("view",s.getViewMatrix()),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),De(i,this._activeEffect),this._mustRebind(s,n,a)&&(this.mixTexture&&(this._activeEffect.setTexture("textureSampler",this._mixTexture),this._activeEffect.setFloat2("vTextureInfos",this._mixTexture.coordinatesIndex,this._mixTexture.level),this._activeEffect.setMatrix("textureMatrix",this._mixTexture.getTextureMatrix()),U.DiffuseTextureEnabled&&(this._diffuseTexture1&&(this._activeEffect.setTexture("diffuse1Sampler",this._diffuseTexture1),this._activeEffect.setFloat2("diffuse1Infos",this._diffuseTexture1.uScale,this._diffuseTexture1.vScale)),this._diffuseTexture2&&(this._activeEffect.setTexture("diffuse2Sampler",this._diffuseTexture2),this._activeEffect.setFloat2("diffuse2Infos",this._diffuseTexture2.uScale,this._diffuseTexture2.vScale)),this._diffuseTexture3&&(this._activeEffect.setTexture("diffuse3Sampler",this._diffuseTexture3),this._activeEffect.setFloat2("diffuse3Infos",this._diffuseTexture3.uScale,this._diffuseTexture3.vScale))),U.BumpTextureEnabled&&s.getEngine().getCaps().standardDerivatives&&(this._bumpTexture1&&this._activeEffect.setTexture("bump1Sampler",this._bumpTexture1),this._bumpTexture2&&this._activeEffect.setTexture("bump2Sampler",this._bumpTexture2),this._bumpTexture3&&this._activeEffect.setTexture("bump3Sampler",this._bumpTexture3))),pe(n,this,s),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&he(r,n,s),s.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*i.visibility),r.SPECULARTERM&&this._activeEffect.setColor4("vSpecularColor",this.specularColor,this.specularPower),s.lightsEnabled&&!this.disableLighting&&ke(s,i,this._activeEffect,r,this.maxSimultaneousLights),s.fogEnabled&&i.applyFog&&s.fogMode!==ne.FOGMODE_NONE&&this._activeEffect.setMatrix("view",s.getViewMatrix()),xe(s,i,this._activeEffect),this._afterBind(i,this._activeEffect,a))}getAnimatables(){const e=[];return this.mixTexture&&this.mixTexture.animations&&this.mixTexture.animations.length>0&&e.push(this.mixTexture),e}getActiveTextures(){const e=super.getActiveTextures();return this._mixTexture&&e.push(this._mixTexture),this._diffuseTexture1&&e.push(this._diffuseTexture1),this._diffuseTexture2&&e.push(this._diffuseTexture2),this._diffuseTexture3&&e.push(this._diffuseTexture3),this._bumpTexture1&&e.push(this._bumpTexture1),this._bumpTexture2&&e.push(this._bumpTexture2),this._bumpTexture3&&e.push(this._bumpTexture3),e}hasTexture(e){return!!(super.hasTexture(e)||this._mixTexture===e||this._diffuseTexture1===e||this._diffuseTexture2===e||this._diffuseTexture3===e||this._bumpTexture1===e||this._bumpTexture2===e||this._bumpTexture3===e)}dispose(e){this.mixTexture&&this.mixTexture.dispose(),super.dispose(e)}clone(e){return V.Clone(()=>new B(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.TerrainMaterial",e}getClassName(){return"TerrainMaterial"}static Parse(e,i,a){return V.Parse(()=>new B(e.name,i),e,i,a)}}d([w("mixTexture")],B.prototype,"_mixTexture",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],B.prototype,"mixTexture",void 0);d([w("diffuseTexture1")],B.prototype,"_diffuseTexture1",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],B.prototype,"diffuseTexture1",void 0);d([w("diffuseTexture2")],B.prototype,"_diffuseTexture2",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],B.prototype,"diffuseTexture2",void 0);d([w("diffuseTexture3")],B.prototype,"_diffuseTexture3",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],B.prototype,"diffuseTexture3",void 0);d([w("bumpTexture1")],B.prototype,"_bumpTexture1",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],B.prototype,"bumpTexture1",void 0);d([w("bumpTexture2")],B.prototype,"_bumpTexture2",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],B.prototype,"bumpTexture2",void 0);d([w("bumpTexture3")],B.prototype,"_bumpTexture3",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],B.prototype,"bumpTexture3",void 0);d([X()],B.prototype,"diffuseColor",void 0);d([X()],B.prototype,"specularColor",void 0);d([T()],B.prototype,"specularPower",void 0);d([T("disableLighting")],B.prototype,"_disableLighting",void 0);d([y("_markAllSubMeshesAsLightsDirty")],B.prototype,"disableLighting",void 0);d([T("maxSimultaneousLights")],B.prototype,"_maxSimultaneousLights",void 0);d([y("_markAllSubMeshesAsLightsDirty")],B.prototype,"maxSimultaneousLights",void 0);oe("BABYLON.TerrainMaterial",B);const Bs="triplanarPixelShader",En=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;
#ifdef SPECULARTERM
uniform vec4 vSpecularColor;
#endif
varying vec3 vPositionW;
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#ifdef DIFFUSEX
varying vec2 vTextureUVX;uniform sampler2D diffuseSamplerX;
#ifdef BUMPX
uniform sampler2D normalSamplerX;
#endif
#endif
#ifdef DIFFUSEY
varying vec2 vTextureUVY;uniform sampler2D diffuseSamplerY;
#ifdef BUMPY
uniform sampler2D normalSamplerY;
#endif
#endif
#ifdef DIFFUSEZ
varying vec2 vTextureUVZ;uniform sampler2D diffuseSamplerZ;
#ifdef BUMPZ
uniform sampler2D normalSamplerZ;
#endif
#endif
#ifdef NORMAL
varying mat3 tangentSpace;
#endif
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(0.,0.,0.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef NORMAL
vec3 normalW=tangentSpace[2];
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
vec4 baseNormal=vec4(0.0,0.0,0.0,1.0);normalW*=normalW;
#ifdef DIFFUSEX
baseColor+=texture2D(diffuseSamplerX,vTextureUVX)*normalW.x;
#ifdef BUMPX
baseNormal+=texture2D(normalSamplerX,vTextureUVX)*normalW.x;
#endif
#endif
#ifdef DIFFUSEY
baseColor+=texture2D(diffuseSamplerY,vTextureUVY)*normalW.y;
#ifdef BUMPY
baseNormal+=texture2D(normalSamplerY,vTextureUVY)*normalW.y;
#endif
#endif
#ifdef DIFFUSEZ
baseColor+=texture2D(diffuseSamplerZ,vTextureUVZ)*normalW.z;
#ifdef BUMPZ
baseNormal+=texture2D(normalSamplerZ,vTextureUVZ)*normalW.z;
#endif
#endif
#ifdef NORMAL
normalW=normalize((2.0*baseNormal.xyz-1.0)*tangentSpace);
#endif
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor.rgb*=vColor.rgb;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;vec3 specularBase=vec3(0.,0.,0.);vec3 specularColor=vSpecularColor.rgb;
#else
float glossiness=0.;
#endif
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#else
vec3 finalSpecular=vec3(0.0);
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse+finalSpecular,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;C.ShadersStore[Bs]||(C.ShadersStore[Bs]=En);const zs="triplanarVertexShader",Tn=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<helperFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSEX
varying vec2 vTextureUVX;
#endif
#ifdef DIFFUSEY
varying vec2 vTextureUVY;
#endif
#ifdef DIFFUSEZ
varying vec2 vTextureUVZ;
#endif
uniform float tileSize;
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying mat3 tangentSpace;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
vec4 colorUpdated=color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef DIFFUSEX
vTextureUVX=worldPos.zy/tileSize;
#endif
#ifdef DIFFUSEY
vTextureUVY=worldPos.xz/tileSize;
#endif
#ifdef DIFFUSEZ
vTextureUVZ=worldPos.xy/tileSize;
#endif
#ifdef NORMAL
vec3 xtan=vec3(0,0,1);vec3 xbin=vec3(0,1,0);vec3 ytan=vec3(1,0,0);vec3 ybin=vec3(0,0,1);vec3 ztan=vec3(1,0,0);vec3 zbin=vec3(0,1,0);vec3 normalizedNormal=normalize(normal);normalizedNormal*=normalizedNormal;vec3 worldBinormal=normalize(xbin*normalizedNormal.x+ybin*normalizedNormal.y+zbin*normalizedNormal.z);vec3 worldTangent=normalize(xtan*normalizedNormal.x+ytan*normalizedNormal.y+ztan*normalizedNormal.z);mat3 normalWorld=mat3(finalWorld);
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
worldTangent=normalize((normalWorld*worldTangent).xyz);worldBinormal=normalize((normalWorld*worldBinormal).xyz);vec3 worldNormal=normalize((normalWorld*normalize(normal)).xyz);tangentSpace[0]=worldTangent;tangentSpace[1]=worldBinormal;tangentSpace[2]=worldNormal;
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;C.ShadersStore[zs]||(C.ShadersStore[zs]=Tn);class Mn extends Se{constructor(){super(),this.DIFFUSEX=!1,this.DIFFUSEY=!1,this.DIFFUSEZ=!1,this.BUMPX=!1,this.BUMPY=!1,this.BUMPZ=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.SPECULARTERM=!1,this.NORMAL=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.NONUNIFORMSCALING=!1,this.LOGARITHMICDEPTH=!1,this.AREALIGHTSUPPORTED=!0,this.AREALIGHTNOROUGHTNESS=!0,this.rebuild()}}class z extends ge{constructor(e,i){super(e,i),this.tileSize=1,this.diffuseColor=new N(1,1,1),this.specularColor=new N(.2,.2,.2),this.specularPower=64,this._disableLighting=!1,this._maxSimultaneousLights=4}needAlphaBlending(){return this.alpha<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(e,i,a){const s=i._drawWrapper;if(this.isFrozen&&s.effect&&s._wasPreviouslyReady&&s._wasPreviouslyUsingInstances===a)return!0;i.materialDefines||(i.materialDefines=new Mn);const r=i.materialDefines,n=this.getScene();if(this._isReadyForSubMesh(i))return!0;const o=n.getEngine();if(r._areTexturesDirty&&n.texturesEnabled){if(U.DiffuseTextureEnabled){const f=[this.diffuseTextureX,this.diffuseTextureY,this.diffuseTextureZ],l=["DIFFUSEX","DIFFUSEY","DIFFUSEZ"];for(let c=0;c<f.length;c++)if(f[c])if(f[c].isReady())r[l[c]]=!0;else return!1}if(U.BumpTextureEnabled){const f=[this.normalTextureX,this.normalTextureY,this.normalTextureZ],l=["BUMPX","BUMPY","BUMPZ"];for(let c=0;c<f.length;c++)if(f[c])if(f[c].isReady())r[l[c]]=!0;else return!1}}if(Pe(e,n,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this.needAlphaTestingForMesh(e),r),r._needNormals=Ve(n,e,r,!1,this._maxSimultaneousLights,this._disableLighting),Ce(n,o,this,r,!!a),ve(e,r,!0,!0),r.isDirty){r.markAsProcessed(),n.resetCachedMaterial();const f=new Ae;r.FOG&&f.addFallback(1,"FOG"),Be(r,f,this.maxSimultaneousLights),r.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e),r.IMAGEPROCESSINGPOSTPROCESS=n.imageProcessingConfiguration.applyByPostProcess;const l=[P.PositionKind];r.NORMAL&&l.push(P.NormalKind),r.VERTEXCOLOR&&l.push(P.ColorKind),Oe(l,e,r,f),Ne(l,r);const c="triplanar",u=r.toString(),h=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vSpecularColor","vFogInfos","vFogColor","pointSize","mBones","tileSize"],m=["diffuseSamplerX","diffuseSamplerY","diffuseSamplerZ","normalSamplerX","normalSamplerY","normalSamplerZ","logarithmicDepthConstant","areaLightsLTC1Sampler","areaLightsLTC2Sampler"],g=[];_e(h),ze({uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:r,maxSimultaneousLights:this.maxSimultaneousLights}),i.setEffect(n.getEngine().createEffect(c,{attributes:l,uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},o),r,this._materialContext)}if(r.AREALIGHTUSED){for(let f=0;f<e.lightSources.length;f++)if(!e.lightSources[f]._isReady())return!1}return!i.effect||!i.effect.isReady()?!1:(r._renderId=n.getRenderId(),s._wasPreviouslyReady=!0,s._wasPreviouslyUsingInstances=!!a,!0)}bindForSubMesh(e,i,a){const s=this.getScene(),r=a.materialDefines;if(!r)return;const n=a.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),De(i,this._activeEffect),this._activeEffect.setFloat("tileSize",this.tileSize),this._mustRebind(s,n,a)&&(this.diffuseTextureX&&this._activeEffect.setTexture("diffuseSamplerX",this.diffuseTextureX),this.diffuseTextureY&&this._activeEffect.setTexture("diffuseSamplerY",this.diffuseTextureY),this.diffuseTextureZ&&this._activeEffect.setTexture("diffuseSamplerZ",this.diffuseTextureZ),this.normalTextureX&&this._activeEffect.setTexture("normalSamplerX",this.normalTextureX),this.normalTextureY&&this._activeEffect.setTexture("normalSamplerY",this.normalTextureY),this.normalTextureZ&&this._activeEffect.setTexture("normalSamplerZ",this.normalTextureZ),pe(n,this,s),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&he(r,n,s),s.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*i.visibility),r.SPECULARTERM&&this._activeEffect.setColor4("vSpecularColor",this.specularColor,this.specularPower),s.lightsEnabled&&!this.disableLighting&&ke(s,i,this._activeEffect,r,this.maxSimultaneousLights),s.fogEnabled&&i.applyFog&&s.fogMode!==ne.FOGMODE_NONE&&this._activeEffect.setMatrix("view",s.getViewMatrix()),xe(s,i,this._activeEffect),this._afterBind(i,this._activeEffect,a))}getAnimatables(){const e=[];return this.mixTexture&&this.mixTexture.animations&&this.mixTexture.animations.length>0&&e.push(this.mixTexture),e}getActiveTextures(){const e=super.getActiveTextures();return this._diffuseTextureX&&e.push(this._diffuseTextureX),this._diffuseTextureY&&e.push(this._diffuseTextureY),this._diffuseTextureZ&&e.push(this._diffuseTextureZ),this._normalTextureX&&e.push(this._normalTextureX),this._normalTextureY&&e.push(this._normalTextureY),this._normalTextureZ&&e.push(this._normalTextureZ),e}hasTexture(e){return!!(super.hasTexture(e)||this._diffuseTextureX===e||this._diffuseTextureY===e||this._diffuseTextureZ===e||this._normalTextureX===e||this._normalTextureY===e||this._normalTextureZ===e)}dispose(e){this.mixTexture&&this.mixTexture.dispose(),super.dispose(e)}clone(e){return V.Clone(()=>new z(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.TriPlanarMaterial",e}getClassName(){return"TriPlanarMaterial"}static Parse(e,i,a){return V.Parse(()=>new z(e.name,i),e,i,a)}}d([w()],z.prototype,"mixTexture",void 0);d([w("diffuseTextureX")],z.prototype,"_diffuseTextureX",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],z.prototype,"diffuseTextureX",void 0);d([w("diffuseTexturY")],z.prototype,"_diffuseTextureY",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],z.prototype,"diffuseTextureY",void 0);d([w("diffuseTextureZ")],z.prototype,"_diffuseTextureZ",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],z.prototype,"diffuseTextureZ",void 0);d([w("normalTextureX")],z.prototype,"_normalTextureX",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],z.prototype,"normalTextureX",void 0);d([w("normalTextureY")],z.prototype,"_normalTextureY",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],z.prototype,"normalTextureY",void 0);d([w("normalTextureZ")],z.prototype,"_normalTextureZ",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],z.prototype,"normalTextureZ",void 0);d([T()],z.prototype,"tileSize",void 0);d([X()],z.prototype,"diffuseColor",void 0);d([X()],z.prototype,"specularColor",void 0);d([T()],z.prototype,"specularPower",void 0);d([T("disableLighting")],z.prototype,"_disableLighting",void 0);d([y("_markAllSubMeshesAsLightsDirty")],z.prototype,"disableLighting",void 0);d([T("maxSimultaneousLights")],z.prototype,"_maxSimultaneousLights",void 0);d([y("_markAllSubMeshesAsLightsDirty")],z.prototype,"maxSimultaneousLights",void 0);oe("BABYLON.TriPlanarMaterial",z);const ks="waterPixelShader",yn=`#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;
#ifdef SPECULARTERM
uniform vec4 vSpecularColor;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<imageProcessingDeclaration>
#include<imageProcessingFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#ifdef BUMP
varying vec2 vNormalUV;
#ifdef BUMPSUPERIMPOSE
varying vec2 vNormalUV2;
#endif
uniform sampler2D normalSampler;uniform vec2 vNormalInfos;
#endif
uniform sampler2D refractionSampler;uniform sampler2D reflectionSampler;const float LOG2=1.442695;uniform vec3 cameraPosition;uniform vec4 waterColor;uniform float colorBlendFactor;uniform vec4 waterColor2;uniform float colorBlendFactor2;uniform float bumpHeight;uniform float time;varying vec3 vRefractionMapTexCoord;varying vec3 vReflectionMapTexCoord;
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef BUMP
#ifdef BUMPSUPERIMPOSE
baseColor=0.6*texture2D(normalSampler,vNormalUV)+0.4*texture2D(normalSampler,vec2(vNormalUV2.x,vNormalUV2.y));
#else
baseColor=texture2D(normalSampler,vNormalUV);
#endif
vec3 bumpColor=baseColor.rgb;
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
baseColor.rgb*=vNormalInfos.y;
#else
vec3 bumpColor=vec3(1.0);
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor.rgb*=vColor.rgb;
#endif
#ifdef NORMAL
vec2 perturbation=bumpHeight*(baseColor.rg-0.5);
#ifdef BUMPAFFECTSREFLECTION
vec3 normalW=normalize(vNormalW+vec3(perturbation.x*8.0,0.0,perturbation.y*8.0));if (normalW.y<0.0) {normalW.y=-normalW.y;}
#else
vec3 normalW=normalize(vNormalW);
#endif
#else
vec3 normalW=vec3(1.0,1.0,1.0);vec2 perturbation=bumpHeight*(vec2(1.0,1.0)-0.5);
#endif
#ifdef FRESNELSEPARATE
#ifdef REFLECTION
vec2 projectedRefractionTexCoords=clamp(vRefractionMapTexCoord.xy/vRefractionMapTexCoord.z+perturbation*0.5,0.0,1.0);vec4 refractiveColor=texture2D(refractionSampler,projectedRefractionTexCoords);
#ifdef IS_REFRACTION_LINEAR
refractiveColor.rgb=toGammaSpace(refractiveColor.rgb);
#endif
vec2 projectedReflectionTexCoords=clamp(vec2(
vReflectionMapTexCoord.x/vReflectionMapTexCoord.z+perturbation.x*0.3,
vReflectionMapTexCoord.y/vReflectionMapTexCoord.z+perturbation.y
),0.0,1.0);vec4 reflectiveColor=texture2D(reflectionSampler,projectedReflectionTexCoords);
#ifdef IS_REFLECTION_LINEAR
reflectiveColor.rgb=toGammaSpace(reflectiveColor.rgb);
#endif
vec3 upVector=vec3(0.0,1.0,0.0);float fresnelTerm=clamp(abs(pow(dot(viewDirectionW,upVector),3.0)),0.05,0.65);float IfresnelTerm=1.0-fresnelTerm;refractiveColor=colorBlendFactor*waterColor+(1.0-colorBlendFactor)*refractiveColor;reflectiveColor=IfresnelTerm*colorBlendFactor2*waterColor+(1.0-colorBlendFactor2*IfresnelTerm)*reflectiveColor;vec4 combinedColor=refractiveColor*fresnelTerm+reflectiveColor*IfresnelTerm;baseColor=combinedColor;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;vec3 specularBase=vec3(0.,0.,0.);vec3 specularColor=vSpecularColor.rgb;
#else
float glossiness=0.;
#endif
#include<lightFragment>[0..maxSimultaneousLights]
vec3 finalDiffuse=clamp(baseColor.rgb,0.0,1.0);
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#else
vec3 finalSpecular=vec3(0.0);
#endif
#else 
#ifdef REFLECTION
vec2 projectedRefractionTexCoords=clamp(vRefractionMapTexCoord.xy/vRefractionMapTexCoord.z+perturbation,0.0,1.0);vec4 refractiveColor=texture2D(refractionSampler,projectedRefractionTexCoords);
#ifdef IS_REFRACTION_LINEAR
refractiveColor.rgb=toGammaSpace(refractiveColor.rgb);
#endif
vec2 projectedReflectionTexCoords=clamp(vReflectionMapTexCoord.xy/vReflectionMapTexCoord.z+perturbation,0.0,1.0);vec4 reflectiveColor=texture2D(reflectionSampler,projectedReflectionTexCoords);
#ifdef IS_REFLECTION_LINEAR
reflectiveColor.rgb=toGammaSpace(reflectiveColor.rgb);
#endif
vec3 upVector=vec3(0.0,1.0,0.0);float fresnelTerm=max(dot(viewDirectionW,upVector),0.0);vec4 combinedColor=refractiveColor*fresnelTerm+reflectiveColor*(1.0-fresnelTerm);baseColor=colorBlendFactor*waterColor+(1.0-colorBlendFactor)*combinedColor;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;vec3 specularBase=vec3(0.,0.,0.);vec3 specularColor=vSpecularColor.rgb;
#else
float glossiness=0.;
#endif
#include<lightFragment>[0..maxSimultaneousLights]
vec3 finalDiffuse=clamp(baseColor.rgb,0.0,1.0);
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#else
vec3 finalSpecular=vec3(0.0);
#endif
#endif
vec4 color=vec4(finalDiffuse+finalSpecular,alpha);
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
color.rgb=toLinearSpace(color.rgb);
#elif defined(IMAGEPROCESSING)
color.rgb=toLinearSpace(color.rgb);color=applyImageProcessing(color);
#endif
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;C.ShadersStore[ks]||(C.ShadersStore[ks]=yn);const Hs="waterVertexShader",Pn=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef BUMP
varying vec2 vNormalUV;
#ifdef BUMPSUPERIMPOSE
varying vec2 vNormalUV2;
#endif
uniform mat4 normalMatrix;uniform vec2 vNormalInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<logDepthDeclaration>
uniform mat4 reflectionViewProjection;uniform vec2 windDirection;uniform float waveLength;uniform float time;uniform float windForce;uniform float waveHeight;uniform float waveSpeed;uniform float waveCount;varying vec3 vRefractionMapTexCoord;varying vec3 vReflectionMapTexCoord;
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
vec4 colorUpdated=color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef BUMP
if (vNormalInfos.x==0.)
{vNormalUV=vec2(normalMatrix*vec4((uv*1.0)/waveLength+time*windForce*windDirection,1.0,0.0));
#ifdef BUMPSUPERIMPOSE
vNormalUV2=vec2(normalMatrix*vec4((uv*0.721)/waveLength+time*1.2*windForce*windDirection,1.0,0.0));
#endif
}
else
{vNormalUV=vec2(normalMatrix*vec4((uv2*1.0)/waveLength+time*windForce*windDirection ,1.0,0.0));
#ifdef BUMPSUPERIMPOSE
vNormalUV2=vec2(normalMatrix*vec4((uv2*0.721)/waveLength+time*1.2*windForce*windDirection ,1.0,0.0));
#endif
}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
float finalWaveCount=1.0/(waveCount*0.5);
#ifdef USE_WORLD_COORDINATES
vec3 p=worldPos.xyz;
#else
vec3 p=position;
#endif
float newY=(sin(((p.x/finalWaveCount)+time*waveSpeed))*waveHeight*windDirection.x*5.0)
+ (cos(((p.z/finalWaveCount)+ time*waveSpeed))*waveHeight*windDirection.y*5.0);p.y+=abs(newY);
#ifdef USE_WORLD_COORDINATES
gl_Position=viewProjection*vec4(p,1.0);
#else
gl_Position=viewProjection*finalWorld*vec4(p,1.0);
#endif
#ifdef REFLECTION
vRefractionMapTexCoord.x=0.5*(gl_Position.w+gl_Position.x);vRefractionMapTexCoord.y=0.5*(gl_Position.w+gl_Position.y);vRefractionMapTexCoord.z=gl_Position.w;worldPos=reflectionViewProjection*finalWorld*vec4(position,1.0);vReflectionMapTexCoord.x=0.5*(worldPos.w+worldPos.x);vReflectionMapTexCoord.y=0.5*(worldPos.w+worldPos.y);vReflectionMapTexCoord.z=worldPos.w;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;C.ShadersStore[Hs]||(C.ShadersStore[Hs]=Pn);class Cn extends Se{constructor(){super(),this.BUMP=!1,this.REFLECTION=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.NORMAL=!1,this.UV1=!1,this.UV2=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.SPECULARTERM=!1,this.LOGARITHMICDEPTH=!1,this.USE_REVERSE_DEPTHBUFFER=!1,this.FRESNELSEPARATE=!1,this.BUMPSUPERIMPOSE=!1,this.BUMPAFFECTSREFLECTION=!1,this.USE_WORLD_COORDINATES=!1,this.IMAGEPROCESSING=!1,this.VIGNETTE=!1,this.VIGNETTEBLENDMODEMULTIPLY=!1,this.VIGNETTEBLENDMODEOPAQUE=!1,this.TONEMAPPING=0,this.CONTRAST=!1,this.EXPOSURE=!1,this.COLORCURVES=!1,this.COLORGRADING=!1,this.COLORGRADING3D=!1,this.SAMPLER3DGREENDEPTH=!1,this.SAMPLER3DBGRMAP=!1,this.DITHER=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.rebuild()}}class I extends ge{get hasRenderTargetTextures(){return!0}constructor(e,i,a=new rs(512,512)){super(e,i),this.renderTargetSize=a,this.diffuseColor=new N(1,1,1),this.specularColor=new N(0,0,0),this.specularPower=64,this._disableLighting=!1,this._maxSimultaneousLights=4,this.windForce=6,this.windDirection=new rs(0,1),this.waveHeight=.4,this.bumpHeight=.4,this._bumpSuperimpose=!1,this._fresnelSeparate=!1,this._bumpAffectsReflection=!1,this.waterColor=new N(.1,.1,.6),this.colorBlendFactor=.2,this.waterColor2=new N(.1,.1,.6),this.colorBlendFactor2=.2,this.waveLength=.1,this.waveSpeed=1,this.waveCount=20,this.disableClipPlane=!1,this._useWorldCoordinatesForWaveDeformation=!1,this._renderTargets=new la(16),this._mesh=null,this._reflectionTransform=Ci.Zero(),this._lastTime=0,this._lastDeltaTime=0,this._createRenderTargets(this.getScene(),a),this.getRenderTargetTextures=()=>(this._renderTargets.reset(),this._renderTargets.push(this._reflectionRTT),this._renderTargets.push(this._refractionRTT),this._renderTargets),this._imageProcessingConfiguration=this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(()=>{this._markAllSubMeshesAsImageProcessingDirty()}))}get refractionTexture(){return this._refractionRTT}get reflectionTexture(){return this._reflectionRTT}addToRenderList(e){this._refractionRTT&&this._refractionRTT.renderList&&this._refractionRTT.renderList.push(e),this._reflectionRTT&&this._reflectionRTT.renderList&&this._reflectionRTT.renderList.push(e)}removeFromRenderList(e){if(this._refractionRTT&&this._refractionRTT.renderList){const i=this._refractionRTT.renderList.indexOf(e);i!==-1&&this._refractionRTT.renderList.splice(i,1)}if(this._reflectionRTT&&this._reflectionRTT.renderList){const i=this._reflectionRTT.renderList.indexOf(e);i!==-1&&this._reflectionRTT.renderList.splice(i,1)}}enableRenderTargets(e){const i=e?1:0;this._refractionRTT&&(this._refractionRTT.refreshRate=i),this._reflectionRTT&&(this._reflectionRTT.refreshRate=i)}getRenderList(){return this._refractionRTT?this._refractionRTT.renderList:[]}get renderTargetsEnabled(){return!(this._refractionRTT&&this._refractionRTT.refreshRate===0)}needAlphaBlending(){return this.alpha<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(e,i,a){const s=i._drawWrapper;if(this.isFrozen&&s.effect&&s._wasPreviouslyReady&&s._wasPreviouslyUsingInstances===a)return!0;i.materialDefines||(i.materialDefines=new Cn);const r=i.materialDefines,n=this.getScene();if(this._isReadyForSubMesh(i))return!0;const o=n.getEngine();if(r._areTexturesDirty&&(r._needUVs=!1,n.texturesEnabled)){if(this.bumpTexture&&U.BumpTextureEnabled)if(this.bumpTexture.isReady())r._needUVs=!0,r.BUMP=!0;else return!1;U.ReflectionTextureEnabled&&(r.REFLECTION=!0)}if(Ce(n,o,this,r,!!a),Pe(e,n,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this.needAlphaTestingForMesh(e),r),r._areMiscDirty&&(r.FRESNELSEPARATE=this._fresnelSeparate,r.BUMPSUPERIMPOSE=this._bumpSuperimpose,r.BUMPAFFECTSREFLECTION=this._bumpAffectsReflection,r.USE_WORLD_COORDINATES=this._useWorldCoordinatesForWaveDeformation),r._needNormals=Ve(n,e,r,!0,this._maxSimultaneousLights,this._disableLighting),r._areImageProcessingDirty&&this._imageProcessingConfiguration){if(!this._imageProcessingConfiguration.isReady())return!1;this._imageProcessingConfiguration.prepareDefines(r),r.IS_REFLECTION_LINEAR=this.reflectionTexture!=null&&!this.reflectionTexture.gammaSpace,r.IS_REFRACTION_LINEAR=this.refractionTexture!=null&&!this.refractionTexture.gammaSpace}if(ve(e,r,!0,!0),this._mesh=e,this._waitingRenderList){for(let f=0;f<this._waitingRenderList.length;f++)this.addToRenderList(n.getNodeById(this._waitingRenderList[f]));this._waitingRenderList=null}if(r.isDirty){r.markAsProcessed(),n.resetCachedMaterial();const f=new Ae;r.FOG&&f.addFallback(1,"FOG"),r.LOGARITHMICDEPTH&&f.addFallback(0,"LOGARITHMICDEPTH"),Be(r,f,this.maxSimultaneousLights),r.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e);const l=[P.PositionKind];r.NORMAL&&l.push(P.NormalKind),r.UV1&&l.push(P.UVKind),r.UV2&&l.push(P.UV2Kind),r.VERTEXCOLOR&&l.push(P.ColorKind),Oe(l,e,r,f),Ne(l,r);const c="water",u=r.toString(),h=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vSpecularColor","vFogInfos","vFogColor","pointSize","vNormalInfos","mBones","normalMatrix","logarithmicDepthConstant","reflectionViewProjection","windDirection","waveLength","time","windForce","cameraPosition","bumpHeight","waveHeight","waterColor","waterColor2","colorBlendFactor","colorBlendFactor2","waveSpeed","waveCount"],m=["normalSampler","refractionSampler","reflectionSampler"],g=[];Ai&&(Ai.PrepareUniforms(h,r),Ai.PrepareSamplers(m,r)),_e(h),ze({uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:r,maxSimultaneousLights:this.maxSimultaneousLights}),i.setEffect(n.getEngine().createEffect(c,{attributes:l,uniformsNames:h,uniformBuffersNames:g,samplers:m,defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights}},o),r,this._materialContext)}return!i.effect||!i.effect.isReady()?!1:(r._renderId=n.getRenderId(),s._wasPreviouslyReady=!0,s._wasPreviouslyUsingInstances=!!a,!0)}bindForSubMesh(e,i,a){const s=this.getScene(),r=a.materialDefines;if(!r)return;const n=a.effect;if(!n||!this._mesh)return;this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),De(i,this._activeEffect),this._mustRebind(s,n,a)&&(this.bumpTexture&&U.BumpTextureEnabled&&(this._activeEffect.setTexture("normalSampler",this.bumpTexture),this._activeEffect.setFloat2("vNormalInfos",this.bumpTexture.coordinatesIndex,this.bumpTexture.level),this._activeEffect.setMatrix("normalMatrix",this.bumpTexture.getTextureMatrix())),pe(n,this,s),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&he(r,n,s),s.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*i.visibility),r.SPECULARTERM&&this._activeEffect.setColor4("vSpecularColor",this.specularColor,this.specularPower),s.lightsEnabled&&!this.disableLighting&&ke(s,i,this._activeEffect,r,this.maxSimultaneousLights),s.fogEnabled&&i.applyFog&&s.fogMode!==ne.FOGMODE_NONE&&this._activeEffect.setMatrix("view",s.getViewMatrix()),xe(s,i,this._activeEffect),he(r,this._activeEffect,s),U.ReflectionTextureEnabled&&(this._activeEffect.setTexture("refractionSampler",this._refractionRTT),this._activeEffect.setTexture("reflectionSampler",this._reflectionRTT));const o=this._reflectionTransform.multiply(s.getProjectionMatrix()),f=s.getEngine().getDeltaTime();f!==this._lastDeltaTime&&(this._lastDeltaTime=f,this._lastTime+=this._lastDeltaTime),this._activeEffect.setMatrix("reflectionViewProjection",o),this._activeEffect.setVector2("windDirection",this.windDirection),this._activeEffect.setFloat("waveLength",this.waveLength),this._activeEffect.setFloat("time",this._lastTime/1e5),this._activeEffect.setFloat("windForce",this.windForce),this._activeEffect.setFloat("waveHeight",this.waveHeight),this._activeEffect.setFloat("bumpHeight",this.bumpHeight),this._activeEffect.setColor4("waterColor",this.waterColor,1),this._activeEffect.setFloat("colorBlendFactor",this.colorBlendFactor),this._activeEffect.setColor4("waterColor2",this.waterColor2,1),this._activeEffect.setFloat("colorBlendFactor2",this.colorBlendFactor2),this._activeEffect.setFloat("waveSpeed",this.waveSpeed),this._activeEffect.setFloat("waveCount",this.waveCount),this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.applyByPostProcess&&this._imageProcessingConfiguration.bind(this._activeEffect),this._afterBind(i,this._activeEffect,a)}_createRenderTargets(e,i){this._refractionRTT=new as(name+"_refraction",{width:i.x,height:i.y},e,!1,!0),this._refractionRTT.wrapU=ti.TEXTURE_MIRROR_ADDRESSMODE,this._refractionRTT.wrapV=ti.TEXTURE_MIRROR_ADDRESSMODE,this._refractionRTT.ignoreCameraViewport=!0;let a=!1;this._refractionRTT.onBeforeRenderObservable.add(()=>{a=e.getBoundingBoxRenderer().enabled,e.getBoundingBoxRenderer().enabled=!1}),this._refractionRTT.onAfterRenderObservable.add(()=>{e.getBoundingBoxRenderer().enabled=a}),this._reflectionRTT=new as(name+"_reflection",{width:i.x,height:i.y},e,!1,!0),this._reflectionRTT.wrapU=ti.TEXTURE_MIRROR_ADDRESSMODE,this._reflectionRTT.wrapV=ti.TEXTURE_MIRROR_ADDRESSMODE,this._reflectionRTT.ignoreCameraViewport=!0;let s,r=null,n;const o=Ci.Zero();this._refractionRTT.onBeforeRender=()=>{if(this._mesh&&(s=this._mesh.isVisible,this._mesh.isVisible=!1),!this.disableClipPlane){r=e.clipPlane;const f=this._mesh?this._mesh.absolutePosition.y:0;e.clipPlane=ns.FromPositionAndNormal(new Z(0,f+.05,0),new Z(0,1,0))}},this._refractionRTT.onAfterRender=()=>{this._mesh&&(this._mesh.isVisible=s),this.disableClipPlane||(e.clipPlane=r)},this._reflectionRTT.onBeforeRender=()=>{if(this._mesh&&(s=this._mesh.isVisible,this._mesh.isVisible=!1),!this.disableClipPlane){r=e.clipPlane;const f=this._mesh?this._mesh.absolutePosition.y:0;e.clipPlane=ns.FromPositionAndNormal(new Z(0,f-.05,0),new Z(0,-1,0)),Ci.ReflectionToRef(e.clipPlane,o)}n=e.getViewMatrix(),o.multiplyToRef(n,this._reflectionTransform),e.setTransformMatrix(this._reflectionTransform,e.getProjectionMatrix()),e._mirroredCameraPosition=Z.TransformCoordinates(e.activeCamera.position,o)},this._reflectionRTT.onAfterRender=()=>{this._mesh&&(this._mesh.isVisible=s),e.clipPlane=r,e.setTransformMatrix(n,e.getProjectionMatrix()),e._mirroredCameraPosition=null}}getAnimatables(){const e=[];return this.bumpTexture&&this.bumpTexture.animations&&this.bumpTexture.animations.length>0&&e.push(this.bumpTexture),this._reflectionRTT&&this._reflectionRTT.animations&&this._reflectionRTT.animations.length>0&&e.push(this._reflectionRTT),this._refractionRTT&&this._refractionRTT.animations&&this._refractionRTT.animations.length>0&&e.push(this._refractionRTT),e}getActiveTextures(){const e=super.getActiveTextures();return this._bumpTexture&&e.push(this._bumpTexture),e}hasTexture(e){return!!(super.hasTexture(e)||this._bumpTexture===e)}dispose(e){this.bumpTexture&&this.bumpTexture.dispose();let i=this.getScene().customRenderTargets.indexOf(this._refractionRTT);i!=-1&&this.getScene().customRenderTargets.splice(i,1),i=-1,i=this.getScene().customRenderTargets.indexOf(this._reflectionRTT),i!=-1&&this.getScene().customRenderTargets.splice(i,1),this._reflectionRTT&&this._reflectionRTT.dispose(),this._refractionRTT&&this._refractionRTT.dispose(),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),super.dispose(e)}clone(e){return V.Clone(()=>new I(e,this.getScene()),this)}serialize(){const e=super.serialize();if(e.customType="BABYLON.WaterMaterial",e.renderList=[],this._refractionRTT&&this._refractionRTT.renderList)for(let i=0;i<this._refractionRTT.renderList.length;i++)e.renderList.push(this._refractionRTT.renderList[i].id);return e}getClassName(){return"WaterMaterial"}static Parse(e,i,a){const s=V.Parse(()=>new I(e.name,i),e,i,a);return s._waitingRenderList=e.renderList,s}static CreateDefaultMesh(e,i){return _r(e,{width:512,height:512,subdivisions:32,updatable:!1},i)}}d([w("bumpTexture")],I.prototype,"_bumpTexture",void 0);d([y("_markAllSubMeshesAsTexturesDirty")],I.prototype,"bumpTexture",void 0);d([X()],I.prototype,"diffuseColor",void 0);d([X()],I.prototype,"specularColor",void 0);d([T()],I.prototype,"specularPower",void 0);d([T("disableLighting")],I.prototype,"_disableLighting",void 0);d([y("_markAllSubMeshesAsLightsDirty")],I.prototype,"disableLighting",void 0);d([T("maxSimultaneousLights")],I.prototype,"_maxSimultaneousLights",void 0);d([y("_markAllSubMeshesAsLightsDirty")],I.prototype,"maxSimultaneousLights",void 0);d([T()],I.prototype,"windForce",void 0);d([fa()],I.prototype,"windDirection",void 0);d([T()],I.prototype,"waveHeight",void 0);d([T()],I.prototype,"bumpHeight",void 0);d([T("bumpSuperimpose")],I.prototype,"_bumpSuperimpose",void 0);d([y("_markAllSubMeshesAsMiscDirty")],I.prototype,"bumpSuperimpose",void 0);d([T("fresnelSeparate")],I.prototype,"_fresnelSeparate",void 0);d([y("_markAllSubMeshesAsMiscDirty")],I.prototype,"fresnelSeparate",void 0);d([T("bumpAffectsReflection")],I.prototype,"_bumpAffectsReflection",void 0);d([y("_markAllSubMeshesAsMiscDirty")],I.prototype,"bumpAffectsReflection",void 0);d([X()],I.prototype,"waterColor",void 0);d([T()],I.prototype,"colorBlendFactor",void 0);d([X()],I.prototype,"waterColor2",void 0);d([T()],I.prototype,"colorBlendFactor2",void 0);d([T()],I.prototype,"waveLength",void 0);d([T()],I.prototype,"waveSpeed",void 0);d([T()],I.prototype,"waveCount",void 0);d([T()],I.prototype,"disableClipPlane",void 0);d([T("useWorldCoordinatesForWaveDeformation")],I.prototype,"_useWorldCoordinatesForWaveDeformation",void 0);d([y("_markAllSubMeshesAsMiscDirty")],I.prototype,"useWorldCoordinatesForWaveDeformation",void 0);oe("BABYLON.WaterMaterial",I);function An(t){const e=_r("ground",{width:os,height:os},t),i=new ie("ground-grid",t);return i.majorUnitFrequency=5,i.minorUnitVisibility=.4,i.gridRatio=ga,i.mainColor=new N(.18,.18,.2),i.lineColor=new N(.4,.42,.46),i.opacity=.98,e.material=i,e.isPickable=!1,e}function Nn(t){const e=new ha("hemi",new Z(0,1,0),t);e.intensity=.7,e.diffuse=new N(1,1,1),e.groundColor=new N(.28,.28,.34);const i=new ua("key",new Z(-.55,-1,-.5),t);i.position=new Z(22,34,22),i.intensity=.85;const a=new ca(2048,i);return a.useBlurExponentialShadowMap=!0,a.blurKernel=32,a.darkness=.5,{shadowGenerator:a}}class wn{scene;camera;components;ghost;droneFleet=[];shadowGenerator;droneCamera;canvas;view="orbit";constructor(e,i,a){this.canvas=i,this.scene=new ne(e),this.scene.clearColor=new Ei(.05,.06,.08,1),this.scene.fogMode=ne.FOGMODE_EXP2,this.scene.fogColor=new N(.05,.06,.08),this.scene.fogDensity=.012,this.camera=Ca(this.scene,i);const{shadowGenerator:s}=Nn(this.scene);this.shadowGenerator=s;const r=An(this.scene);r.receiveShadows=!0,this.ghost=Da(this.scene,a),this.components=new wa(this.scene,a),this.droneCamera=new Oa(this.scene);for(const n of this.components.allMeshes())s.addShadowCaster(n);this.setDroneCount(Ke.defaultCount),this.scene.activeCamera=this.camera}get drones(){return this.droneFleet}get leadDrone(){const e=this.droneFleet[0];if(!e)throw new Error("drone fleet is empty");return e}get cameraView(){return this.view}setDroneCount(e){const i=Number.isFinite(e)?Math.round(e):Ke.defaultCount,a=Math.max(Ke.minCount,Math.min(Ke.maxCount,i));for(const s of this.droneFleet)this.shadowGenerator.removeShadowCaster(s.mesh),s.dispose();return this.droneFleet=Array.from({length:a},(s,r)=>{const n=Sr(r,a),o=new Ra(this.scene,n,r);return this.shadowGenerator.addShadowCaster(o.mesh),this.view==="drone"&&r===0&&o.setVisible(!1),o}),this.droneFleet}setCameraView(e){e!==this.view&&(this.view=e,e==="drone"?(this.camera.detachControl(),this.leadDrone.setVisible(!1),this.scene.activeCamera=this.droneCamera.camera):(this.leadDrone.setVisible(!0),this.scene.activeCamera=this.camera,this.camera.attachControl(this.canvas,!0)))}syncDroneCamera(e,i){this.droneCamera.follow(e,i)}dispose(){for(const e of this.droneFleet)e.dispose();this.droneCamera.dispose(),this.components.dispose(),this.ghost.dispose(),this.scene.dispose()}}function In(t,e){let i=null;const a=t.onPointerObservable.add(s=>{if(s.type!==da.POINTERMOVE)return;const r=t.pick(t.pointerX,t.pointerY),n=r?.pickedMesh?.metadata,o=r?.hit&&n?.componentId||null;o!==i&&(i=o,e(o))});return()=>t.onPointerObservable.remove(a)}function bn(t){t("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),t("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),t("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");for(var e=1;e<=60;++e)t("EPSG:"+(32600+e),"+proj=utm +zone="+e+" +datum=WGS84 +units=m"),t("EPSG:"+(32700+e),"+proj=utm +zone="+e+" +south +datum=WGS84 +units=m");t("EPSG:5041","+title=WGS 84 / UPS North (E,N) +proj=stere +lat_0=90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m"),t("EPSG:5042","+title=WGS 84 / UPS South (E,N) +proj=stere +lat_0=-90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m"),t.WGS84=t["EPSG:4326"],t["EPSG:3785"]=t["EPSG:3857"],t.GOOGLE=t["EPSG:3857"],t["EPSG:900913"]=t["EPSG:3857"],t["EPSG:102113"]=t["EPSG:3857"]}var lt=1,ht=2,Tt=3,Ln=4,Gi=5,Ws=6378137,Rn=6356752314e-3,Xs=.0066943799901413165,Ot=484813681109536e-20,p=Math.PI/2,On=.16666666666666666,Dn=.04722222222222222,Fn=.022156084656084655,x=1e-10,W=.017453292519943295,me=57.29577951308232,D=Math.PI/4,Wt=Math.PI*2,j=3.14159265359,Ee={};Ee.greenwich=0;Ee.lisbon=-9.131906111111;Ee.paris=2.337229166667;Ee.bogota=-74.080916666667;Ee.madrid=-3.687938888889;Ee.rome=12.452333333333;Ee.bern=7.439583333333;Ee.jakarta=106.807719444444;Ee.ferro=-17.666666666667;Ee.brussels=4.367975;Ee.stockholm=18.058277777778;Ee.athens=23.7163375;Ee.oslo=10.722916666667;const Gn={mm:{to_meter:.001},cm:{to_meter:.01},ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937},fath:{to_meter:1.8288},kmi:{to_meter:1852},"us-ch":{to_meter:20.1168402336805},"us-mi":{to_meter:1609.34721869444},km:{to_meter:1e3},"ind-ft":{to_meter:.30479841},"ind-yd":{to_meter:.91439523},mi:{to_meter:1609.344},yd:{to_meter:.9144},ch:{to_meter:20.1168},link:{to_meter:.201168},dm:{to_meter:.1},in:{to_meter:.0254},"ind-ch":{to_meter:20.11669506},"us-in":{to_meter:.025400050800101},"us-yd":{to_meter:.914401828803658}};var js=/[\s_\-\/\(\)]/g;function Je(t,e){if(t[e])return t[e];for(var i=Object.keys(t),a=e.toLowerCase().replace(js,""),s=-1,r,n;++s<i.length;)if(r=i[s],n=r.toLowerCase().replace(js,""),n===a)return t[r]}function Ui(t){var e={},i=t.split("+").map(function(o){return o.trim()}).filter(function(o){return o}).reduce(function(o,f){var l=f.split("=");return l.push(!0),o[l[0].toLowerCase()]=l[1],o},{}),a,s,r,n={proj:"projName",datum:"datumCode",rf:function(o){e.rf=parseFloat(o)},lat_0:function(o){e.lat0=o*W},lat_1:function(o){e.lat1=o*W},lat_2:function(o){e.lat2=o*W},lat_ts:function(o){e.lat_ts=o*W},lon_0:function(o){e.long0=o*W},lon_1:function(o){e.long1=o*W},lon_2:function(o){e.long2=o*W},alpha:function(o){e.alpha=parseFloat(o)*W},gamma:function(o){e.rectified_grid_angle=parseFloat(o)*W},lonc:function(o){e.longc=o*W},x_0:function(o){e.x0=parseFloat(o)},y_0:function(o){e.y0=parseFloat(o)},k_0:function(o){e.k0=parseFloat(o)},k:function(o){e.k0=parseFloat(o)},a:function(o){e.a=parseFloat(o)},b:function(o){e.b=parseFloat(o)},r:function(o){e.a=e.b=parseFloat(o)},r_a:function(){e.R_A=!0},zone:function(o){e.zone=parseInt(o,10)},south:function(){e.utmSouth=!0},towgs84:function(o){e.datum_params=o.split(",").map(function(f){return parseFloat(f)})},to_meter:function(o){e.to_meter=parseFloat(o)},units:function(o){e.units=o;var f=Je(Gn,o);f&&(e.to_meter=f.to_meter)},from_greenwich:function(o){e.from_greenwich=o*W},pm:function(o){var f=Je(Ee,o);e.from_greenwich=(f||parseFloat(o))*W},nadgrids:function(o){o==="@null"?e.datumCode="none":e.nadgrids=o},axis:function(o){var f="ewnsud";o.length===3&&f.indexOf(o.substr(0,1))!==-1&&f.indexOf(o.substr(1,1))!==-1&&f.indexOf(o.substr(2,1))!==-1&&(e.axis=o)},approx:function(){e.approx=!0},over:function(){e.over=!0}};for(a in i)s=i[a],a in n?(r=n[a],typeof r=="function"?r(s):e[r]=s):e[a]=s;return typeof e.datumCode=="string"&&e.datumCode!=="WGS84"&&(e.datumCode=e.datumCode.toLowerCase()),e.projStr=t,e}class Er{static getId(e){const i=e.find(a=>Array.isArray(a)&&a[0]==="ID");return i&&i.length>=3?{authority:i[1],code:parseInt(i[2],10)}:null}static convertUnit(e,i="unit"){if(!e||e.length<3)return{type:i,name:"unknown",conversion_factor:null};const a=e[1],s=parseFloat(e[2])||null,r=e.find(o=>Array.isArray(o)&&o[0]==="ID"),n=r?{authority:r[1],code:parseInt(r[2],10)}:null;return{type:i,name:a,conversion_factor:s,id:n}}static convertAxis(e){const i=e[1]||"Unknown";let a;const s=i.match(/^\((.)\)$/);if(s){const l=s[1].toUpperCase();if(l==="E")a="east";else if(l==="N")a="north";else if(l==="U")a="up";else if(e[2])a=e[2];else throw new Error(`Unknown axis abbreviation: ${l}`)}else a=e[2]||"unknown";const r=e.find(l=>Array.isArray(l)&&l[0]==="ORDER"),n=r?parseInt(r[1],10):null,o=e.find(l=>Array.isArray(l)&&(l[0]==="LENGTHUNIT"||l[0]==="ANGLEUNIT"||l[0]==="SCALEUNIT")),f=this.convertUnit(o);return{name:i,direction:a,unit:f,order:n}}static extractAxes(e){return e.filter(i=>Array.isArray(i)&&i[0]==="AXIS").map(i=>this.convertAxis(i)).sort((i,a)=>(i.order||0)-(a.order||0))}static convert(e,i={}){switch(e[0]){case"PROJCRS":i.type="ProjectedCRS",i.name=e[1],i.base_crs=e.find(h=>Array.isArray(h)&&h[0]==="BASEGEOGCRS")?this.convert(e.find(h=>Array.isArray(h)&&h[0]==="BASEGEOGCRS")):null,i.conversion=e.find(h=>Array.isArray(h)&&h[0]==="CONVERSION")?this.convert(e.find(h=>Array.isArray(h)&&h[0]==="CONVERSION")):null;const a=e.find(h=>Array.isArray(h)&&h[0]==="CS");a&&(i.coordinate_system={type:a[1],axis:this.extractAxes(e)});const s=e.find(h=>Array.isArray(h)&&h[0]==="LENGTHUNIT");if(s){const h=this.convertUnit(s);i.coordinate_system.unit=h}i.id=this.getId(e);break;case"BASEGEOGCRS":case"GEOGCRS":case"GEODCRS":i.type=e[0]==="GEODCRS"?"GeodeticCRS":"GeographicCRS",i.name=e[1];const r=e.find(h=>Array.isArray(h)&&(h[0]==="DATUM"||h[0]==="ENSEMBLE"));if(r){const h=this.convert(r);r[0]==="ENSEMBLE"?i.datum_ensemble=h:i.datum=h;const m=e.find(g=>Array.isArray(g)&&g[0]==="PRIMEM");m&&m[1]!=="Greenwich"&&(h.prime_meridian={name:m[1],longitude:parseFloat(m[2])})}i.coordinate_system={type:"ellipsoidal",axis:this.extractAxes(e)},i.id=this.getId(e);break;case"DATUM":i.type="GeodeticReferenceFrame",i.name=e[1],i.ellipsoid=e.find(h=>Array.isArray(h)&&h[0]==="ELLIPSOID")?this.convert(e.find(h=>Array.isArray(h)&&h[0]==="ELLIPSOID")):null;break;case"ENSEMBLE":i.type="DatumEnsemble",i.name=e[1],i.members=e.filter(h=>Array.isArray(h)&&h[0]==="MEMBER").map(h=>({type:"DatumEnsembleMember",name:h[1],id:this.getId(h)}));const n=e.find(h=>Array.isArray(h)&&h[0]==="ENSEMBLEACCURACY");n&&(i.accuracy=parseFloat(n[1]));const o=e.find(h=>Array.isArray(h)&&h[0]==="ELLIPSOID");o&&(i.ellipsoid=this.convert(o)),i.id=this.getId(e);break;case"ELLIPSOID":i.type="Ellipsoid",i.name=e[1],i.semi_major_axis=parseFloat(e[2]),i.inverse_flattening=parseFloat(e[3]),e.find(h=>Array.isArray(h)&&h[0]==="LENGTHUNIT")&&this.convert(e.find(h=>Array.isArray(h)&&h[0]==="LENGTHUNIT"),i);break;case"CONVERSION":i.type="Conversion",i.name=e[1],i.method=e.find(h=>Array.isArray(h)&&h[0]==="METHOD")?this.convert(e.find(h=>Array.isArray(h)&&h[0]==="METHOD")):null,i.parameters=e.filter(h=>Array.isArray(h)&&h[0]==="PARAMETER").map(h=>this.convert(h));break;case"METHOD":i.type="Method",i.name=e[1],i.id=this.getId(e);break;case"PARAMETER":i.type="Parameter",i.name=e[1],i.value=parseFloat(e[2]),i.unit=this.convertUnit(e.find(h=>Array.isArray(h)&&(h[0]==="LENGTHUNIT"||h[0]==="ANGLEUNIT"||h[0]==="SCALEUNIT"))),i.id=this.getId(e);break;case"BOUNDCRS":i.type="BoundCRS";const f=e.find(h=>Array.isArray(h)&&h[0]==="SOURCECRS");if(f){const h=f.find(m=>Array.isArray(m));i.source_crs=h?this.convert(h):null}const l=e.find(h=>Array.isArray(h)&&h[0]==="TARGETCRS");if(l){const h=l.find(m=>Array.isArray(m));i.target_crs=h?this.convert(h):null}const c=e.find(h=>Array.isArray(h)&&h[0]==="ABRIDGEDTRANSFORMATION");c?i.transformation=this.convert(c):i.transformation=null;break;case"ABRIDGEDTRANSFORMATION":if(i.type="Transformation",i.name=e[1],i.method=e.find(h=>Array.isArray(h)&&h[0]==="METHOD")?this.convert(e.find(h=>Array.isArray(h)&&h[0]==="METHOD")):null,i.parameters=e.filter(h=>Array.isArray(h)&&(h[0]==="PARAMETER"||h[0]==="PARAMETERFILE")).map(h=>{if(h[0]==="PARAMETER")return this.convert(h);if(h[0]==="PARAMETERFILE")return{name:h[1],value:h[2],id:{authority:"EPSG",code:8656}}}),i.parameters.length===7){const h=i.parameters[6];h.name==="Scale difference"&&(h.value=Math.round((h.value-1)*1e12)/1e6)}i.id=this.getId(e);break;case"AXIS":i.coordinate_system||(i.coordinate_system={type:"unspecified",axis:[]}),i.coordinate_system.axis.push(this.convertAxis(e));break;case"LENGTHUNIT":const u=this.convertUnit(e,"LinearUnit");i.coordinate_system&&i.coordinate_system.axis&&i.coordinate_system.axis.forEach(h=>{h.unit||(h.unit=u)}),u.conversion_factor&&u.conversion_factor!==1&&i.semi_major_axis&&(i.semi_major_axis={value:i.semi_major_axis,unit:u});break;default:i.keyword=e[0];break}return i}}class Un extends Er{static convert(e,i={}){return super.convert(e,i),i.coordinate_system&&i.coordinate_system.subtype==="Cartesian"&&delete i.coordinate_system,i.usage&&delete i.usage,i}}class Vn extends Er{static convert(e,i={}){super.convert(e,i);const a=e.find(r=>Array.isArray(r)&&r[0]==="CS");a&&(i.coordinate_system={subtype:a[1],axis:this.extractAxes(e)});const s=e.find(r=>Array.isArray(r)&&r[0]==="USAGE");if(s){const r=s.find(f=>Array.isArray(f)&&f[0]==="SCOPE"),n=s.find(f=>Array.isArray(f)&&f[0]==="AREA"),o=s.find(f=>Array.isArray(f)&&f[0]==="BBOX");i.usage={},r&&(i.usage.scope=r[1]),n&&(i.usage.area=n[1]),o&&(i.usage.bbox=o.slice(1))}return i}}function Bn(t){return t.find(e=>Array.isArray(e)&&e[0]==="USAGE")?"2019":(t.find(e=>Array.isArray(e)&&e[0]==="CS")||t[0]==="BOUNDCRS"||t[0]==="PROJCRS"||t[0]==="GEOGCRS","2015")}function zn(t){return(Bn(t)==="2019"?Vn:Un).convert(t)}function kn(t){const e=t.toUpperCase();return e.includes("PROJCRS")||e.includes("GEOGCRS")||e.includes("BOUNDCRS")||e.includes("VERTCRS")||e.includes("LENGTHUNIT")||e.includes("ANGLEUNIT")||e.includes("SCALEUNIT")?"WKT2":(e.includes("PROJCS")||e.includes("GEOGCS")||e.includes("LOCAL_CS")||e.includes("VERT_CS")||e.includes("UNIT"),"WKT1")}var Xt=1,Tr=2,Mr=3,di=4,yr=5,ji=-1,Hn=/\s/,Wn=/[A-Za-z]/,Xn=/[A-Za-z84_]/,Ti=/[,\]]/,Pr=/[\d\.E\-\+]/;function je(t){if(typeof t!="string")throw new Error("not a string");this.text=t.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=Xt}je.prototype.readCharicter=function(){var t=this.text[this.place++];if(this.state!==di)for(;Hn.test(t);){if(this.place>=this.text.length)return;t=this.text[this.place++]}switch(this.state){case Xt:return this.neutral(t);case Tr:return this.keyword(t);case di:return this.quoted(t);case yr:return this.afterquote(t);case Mr:return this.number(t);case ji:return}};je.prototype.afterquote=function(t){if(t==='"'){this.word+='"',this.state=di;return}if(Ti.test(t)){this.word=this.word.trim(),this.afterItem(t);return}throw new Error(`havn't handled "`+t+'" in afterquote yet, index '+this.place)};je.prototype.afterItem=function(t){if(t===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=Xt;return}if(t==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=Xt,this.currentObject=this.stack.pop(),this.currentObject||(this.state=ji);return}};je.prototype.number=function(t){if(Pr.test(t)){this.word+=t;return}if(Ti.test(t)){this.word=parseFloat(this.word),this.afterItem(t);return}throw new Error(`havn't handled "`+t+'" in number yet, index '+this.place)};je.prototype.quoted=function(t){if(t==='"'){this.state=yr;return}this.word+=t};je.prototype.keyword=function(t){if(Xn.test(t)){this.word+=t;return}if(t==="["){var e=[];e.push(this.word),this.level++,this.root===null?this.root=e:this.currentObject.push(e),this.stack.push(this.currentObject),this.currentObject=e,this.state=Xt;return}if(Ti.test(t)){this.afterItem(t);return}throw new Error(`havn't handled "`+t+'" in keyword yet, index '+this.place)};je.prototype.neutral=function(t){if(Wn.test(t)){this.word=t,this.state=Tr;return}if(t==='"'){this.word="",this.state=di;return}if(Pr.test(t)){this.word=t,this.state=Mr;return}if(Ti.test(t)){this.afterItem(t);return}throw new Error(`havn't handled "`+t+'" in neutral yet, index '+this.place)};je.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===ji)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function jn(t){var e=new je(t);return e.output()}function Ni(t,e,i){Array.isArray(e)&&(i.unshift(e),e=null);var a=e?{}:t,s=i.reduce(function(r,n){return _t(n,r),r},a);e&&(t[e]=s)}function _t(t,e){if(!Array.isArray(t)){e[t]=!0;return}var i=t.shift();if(i==="PARAMETER"&&(i=t.shift()),t.length===1){if(Array.isArray(t[0])){e[i]={},_t(t[0],e[i]);return}e[i]=t[0];return}if(!t.length){e[i]=!0;return}if(i==="TOWGS84"){e[i]=t;return}if(i==="AXIS"){i in e||(e[i]=[]),e[i].push(t);return}Array.isArray(i)||(e[i]={});var a;switch(i){case"UNIT":case"PRIMEM":case"VERT_DATUM":e[i]={name:t[0].toLowerCase(),convert:t[1]},t.length===3&&_t(t[2],e[i]);return;case"SPHEROID":case"ELLIPSOID":e[i]={name:t[0],a:t[1],rf:t[2]},t.length===4&&_t(t[3],e[i]);return;case"EDATUM":case"ENGINEERINGDATUM":case"LOCAL_DATUM":case"DATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":t[0]=["name",t[0]],Ni(e,i,t);return;case"COMPD_CS":case"COMPOUNDCRS":case"FITTED_CS":case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"ENGCRS":case"ENGINEERINGCRS":t[0]=["name",t[0]],Ni(e,i,t),e[i].type=i;return;default:for(a=-1;++a<t.length;)if(!Array.isArray(t[a]))return _t(t,e[i]);return Ni(e,i,t)}}var $n=.017453292519943295;function Ie(t){return t*$n}function Cr(t){const e=(t.projName||"").toLowerCase().replace(/_/g," ");t.long0===void 0&&t.longc!==void 0&&(t.long0=t.longc),!t.lat_ts&&t.lat1&&(e==="stereographic south pole"||e==="polar stereographic (variant b)")?(t.lat0=Ie(t.lat1>0?90:-90),t.lat_ts=t.lat1,delete t.lat1):!t.lat_ts&&t.lat0&&(e==="polar stereographic"||e==="polar stereographic (variant a)")&&(t.lat_ts=t.lat0,t.lat0=Ie(t.lat0>0?90:-90),delete t.lat1)}function $s(t){let e={units:null,to_meter:void 0};return typeof t=="string"?(e.units=t.toLowerCase(),e.units==="metre"&&(e.units="meter"),e.units==="meter"&&(e.to_meter=1)):t&&t.name&&(e.units=t.name.toLowerCase(),e.units==="metre"&&(e.units="meter"),e.to_meter=t.conversion_factor),e}function qs(t){return typeof t=="object"?t.value*t.unit.conversion_factor:t}function Ks(t,e){t.ellipsoid.radius?(e.a=t.ellipsoid.radius,e.rf=0):(e.a=qs(t.ellipsoid.semi_major_axis),t.ellipsoid.inverse_flattening!==void 0?e.rf=t.ellipsoid.inverse_flattening:t.ellipsoid.semi_major_axis!==void 0&&t.ellipsoid.semi_minor_axis!==void 0&&(e.rf=e.a/(e.a-qs(t.ellipsoid.semi_minor_axis))))}function mi(t,e={}){return!t||typeof t!="object"?t:t.type==="BoundCRS"?(mi(t.source_crs,e),t.transformation&&(t.transformation.method&&t.transformation.method.name==="NTv2"?e.nadgrids=t.transformation.parameters[0].value:e.datum_params=t.transformation.parameters.map(i=>i.value)),e):(Object.keys(t).forEach(i=>{const a=t[i];if(a!==null)switch(i){case"name":if(e.srsCode)break;e.name=a,e.srsCode=a;break;case"type":a==="GeographicCRS"?e.projName="longlat":a==="GeodeticCRS"?t.coordinate_system&&t.coordinate_system.subtype==="Cartesian"?e.projName="geocent":e.projName="longlat":a==="ProjectedCRS"&&t.conversion&&t.conversion.method&&(e.projName=t.conversion.method.name);break;case"datum":case"datum_ensemble":a.ellipsoid&&(e.ellps=a.ellipsoid.name,Ks(a,e)),a.prime_meridian&&(e.from_greenwich=a.prime_meridian.longitude*Math.PI/180);break;case"ellipsoid":e.ellps=a.name,Ks(a,e);break;case"prime_meridian":e.long0=(a.longitude||0)*Math.PI/180;break;case"coordinate_system":if(a.axis){const s={east:"e",north:"n",west:"w",south:"s",up:"u",down:"d",geocentricx:"e",geocentricy:"n",geocentricz:"u"},r=a.axis.map(n=>s[n.direction.toLowerCase()]);if(r.every(Boolean)&&(e.axis=r.join(""),e.axis.length===2&&(e.axis+="u")),a.unit){const{units:n,to_meter:o}=$s(a.unit);e.units=n,e.to_meter=o}else if(a.axis[0]&&a.axis[0].unit){const{units:n,to_meter:o}=$s(a.axis[0].unit);e.units=n,e.to_meter=o}}break;case"id":a.authority&&a.code&&(e.title=a.authority+":"+a.code);break;case"conversion":a.method&&a.method.name&&(e.projName=a.method.name),a.parameters&&a.parameters.forEach(s=>{const r=s.name.toLowerCase().replace(/\s+/g,"_"),n=s.value;s.unit&&s.unit.conversion_factor?e[r]=n*s.unit.conversion_factor:s.unit==="degree"?e[r]=n*Math.PI/180:e[r]=n});break;case"unit":a.name&&(e.units=a.name.toLowerCase(),e.units==="metre"&&(e.units="meter")),a.conversion_factor&&(e.to_meter=a.conversion_factor);break;case"base_crs":mi(a,e),e.datumCode=a.id?a.id.authority+"_"+a.id.code:a.name;break}}),e.latitude_of_false_origin!==void 0&&(e.lat0=e.latitude_of_false_origin),e.longitude_of_false_origin!==void 0&&(e.long0=e.longitude_of_false_origin),e.latitude_of_standard_parallel!==void 0&&(e.lat0=e.latitude_of_standard_parallel,e.lat1=e.latitude_of_standard_parallel),e.latitude_of_1st_standard_parallel!==void 0&&(e.lat1=e.latitude_of_1st_standard_parallel),e.latitude_of_2nd_standard_parallel!==void 0&&(e.lat2=e.latitude_of_2nd_standard_parallel),e.latitude_of_projection_centre!==void 0&&(e.lat0=e.latitude_of_projection_centre),e.longitude_of_projection_centre!==void 0&&(e.longc=e.longitude_of_projection_centre),e.easting_at_false_origin!==void 0&&(e.x0=e.easting_at_false_origin),e.northing_at_false_origin!==void 0&&(e.y0=e.northing_at_false_origin),e.latitude_of_natural_origin!==void 0&&(e.lat0=e.latitude_of_natural_origin),e.longitude_of_natural_origin!==void 0&&(e.long0=e.longitude_of_natural_origin),e.longitude_of_origin!==void 0&&(e.long0=e.longitude_of_origin),e.false_easting!==void 0&&(e.x0=e.false_easting),e.easting_at_projection_centre&&(e.x0=e.easting_at_projection_centre),e.false_northing!==void 0&&(e.y0=e.false_northing),e.northing_at_projection_centre&&(e.y0=e.northing_at_projection_centre),e.standard_parallel_1!==void 0&&(e.lat1=e.standard_parallel_1),e.standard_parallel_2!==void 0&&(e.lat2=e.standard_parallel_2),e.scale_factor_at_natural_origin!==void 0&&(e.k0=e.scale_factor_at_natural_origin),e.scale_factor_at_projection_centre!==void 0&&(e.k0=e.scale_factor_at_projection_centre),e.scale_factor_on_pseudo_standard_parallel!==void 0&&(e.k0=e.scale_factor_on_pseudo_standard_parallel),e.azimuth!==void 0&&(e.alpha=e.azimuth),e.azimuth_at_projection_centre!==void 0&&(e.alpha=e.azimuth_at_projection_centre),e.angle_from_rectified_to_skew_grid&&(e.rectified_grid_angle=e.angle_from_rectified_to_skew_grid),Cr(e),e)}var qn=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function Kn(t,e){var i=e[0],a=e[1];!(i in t)&&a in t&&(t[i]=t[a],e.length===3&&(t[i]=e[2](t[i])))}function Ar(t){for(var e=Object.keys(t),i=0,a=e.length;i<a;++i){var s=e[i];qn.indexOf(s)!==-1&&Zn(t[s]),typeof t[s]=="object"&&Ar(t[s])}}function Zn(t){if(t.AUTHORITY){var e=Object.keys(t.AUTHORITY)[0];e&&e in t.AUTHORITY&&(t.title=e+":"+t.AUTHORITY[e])}if(t.type==="GEOGCS"?t.projName="longlat":t.type==="LOCAL_CS"?(t.projName="identity",t.local=!0):typeof t.PROJECTION=="object"?t.projName=Object.keys(t.PROJECTION)[0]:t.projName=t.PROJECTION,t.AXIS){for(var i="",a=0,s=t.AXIS.length;a<s;++a){var r=[t.AXIS[a][0].toLowerCase(),t.AXIS[a][1].toLowerCase()];r[0].indexOf("north")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="north"?i+="n":r[0].indexOf("south")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="south"?i+="s":r[0].indexOf("east")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="east"?i+="e":(r[0].indexOf("west")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="west")&&(i+="w")}i.length===2&&(i+="u"),i.length===3&&(t.axis=i)}t.UNIT&&(t.units=t.UNIT.name.toLowerCase(),t.units==="metre"&&(t.units="meter"),t.UNIT.convert&&(t.type==="GEOGCS"?t.DATUM&&t.DATUM.SPHEROID&&(t.to_meter=t.UNIT.convert*t.DATUM.SPHEROID.a):t.to_meter=t.UNIT.convert));var n=t.GEOGCS;t.type==="GEOGCS"&&(n=t),n&&(n.PRIMEM&&n.PRIMEM.convert&&(t.from_greenwich=Ie(n.PRIMEM.convert)),n.DATUM?t.datumCode=n.DATUM.name.toLowerCase():t.datumCode=n.name.toLowerCase(),t.datumCode.slice(0,2)==="d_"&&(t.datumCode=t.datumCode.slice(2)),t.datumCode==="new_zealand_1949"&&(t.datumCode="nzgd49"),(t.datumCode==="wgs_1984"||t.datumCode==="world_geodetic_system_1984")&&(t.PROJECTION==="Mercator_Auxiliary_Sphere"&&(t.sphere=!0),t.datumCode="wgs84"),t.datumCode==="belge_1972"&&(t.datumCode="rnb72"),n.DATUM&&n.DATUM.SPHEROID&&(t.ellps=n.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),t.ellps.toLowerCase().slice(0,13)==="international"&&(t.ellps="intl"),t.a=n.DATUM.SPHEROID.a,t.rf=parseFloat(n.DATUM.SPHEROID.rf)),n.DATUM&&n.DATUM.TOWGS84&&(t.datum_params=n.DATUM.TOWGS84),~t.datumCode.indexOf("osgb_1936")&&(t.datumCode="osgb36"),~t.datumCode.indexOf("osni_1952")&&(t.datumCode="osni52"),(~t.datumCode.indexOf("tm65")||~t.datumCode.indexOf("geodetic_datum_of_1965"))&&(t.datumCode="ire65"),t.datumCode==="ch1903+"&&(t.datumCode="ch1903"),~t.datumCode.indexOf("israel")&&(t.datumCode="isr93")),t.b&&!isFinite(t.b)&&(t.b=t.a),t.rectified_grid_angle&&(t.rectified_grid_angle=Ie(t.rectified_grid_angle));function o(c){var u=t.to_meter||1;return c*u}var f=function(c){return Kn(t,c)},l=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",Ie],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",Ie],["x0","false_easting",o],["y0","false_northing",o],["long0","central_meridian",Ie],["lat0","latitude_of_origin",Ie],["lat0","standard_parallel_1",Ie],["lat1","standard_parallel_1",Ie],["lat2","standard_parallel_2",Ie],["azimuth","Azimuth"],["alpha","azimuth",Ie],["srsCode","name"]];l.forEach(f),Cr(t)}function gi(t){if(typeof t=="object")return mi(t);const e=kn(t);var i=jn(t);if(e==="WKT2"){const r=zn(i);return mi(r)}var a=i[0],s={};return _t(i,s),Ar(s),s[a]}function te(t){var e=this;if(arguments.length===2){var i=arguments[1];typeof i=="string"?i.charAt(0)==="+"?te[t]=Ui(arguments[1]):te[t]=gi(arguments[1]):i&&typeof i=="object"&&!("projName"in i)?te[t]=gi(arguments[1]):(te[t]=i,i||delete te[t])}else if(arguments.length===1){if(Array.isArray(t))return t.map(function(a){return Array.isArray(a)?te.apply(e,a):te(a)});if(typeof t=="string"){if(t in te)return te[t]}else"EPSG"in t?te["EPSG:"+t.EPSG]=t:"ESRI"in t?te["ESRI:"+t.ESRI]=t:"IAU2000"in t?te["IAU2000:"+t.IAU2000]=t:console.log(t);return}}bn(te);function Yn(t){return typeof t=="string"}function Qn(t){return t in te}function Jn(t){return t.indexOf("+")!==0&&t.indexOf("[")!==-1||typeof t=="object"&&!("srsCode"in t)}var Zs=["3857","900913","3785","102113"];function eo(t){if(t.title)return t.title.toLowerCase().indexOf("epsg:")===0&&Zs.indexOf(t.title.substr(5))>-1;var e=Je(t,"authority");if(e){var i=Je(e,"epsg");return i&&Zs.indexOf(i)>-1}}function to(t){var e=Je(t,"extension");if(e)return Je(e,"proj4")}function io(t){return t[0]==="+"}function so(t){let e;if(Yn(t))if(Qn(t))e=te[t];else if(Jn(t)){e=gi(t);var i=to(e);i&&(e=Ui(i))}else io(t)&&(e=Ui(t));else"projName"in t?e=t:e=gi(t);return e&&eo(e)?te["EPSG:3857"]:e}function Ys(t,e){t=t||{};var i,a;if(!e)return t;for(a in e)i=e[a],i!==void 0&&(t[a]=i);return t}function We(t,e,i){var a=t*e;return i/Math.sqrt(1-a*a)}function Zt(t){return t<0?-1:1}function E(t,e){return e||Math.abs(t)<=j?t:t-Zt(t)*Wt}function Fe(t,e,i){var a=t*i,s=.5*t;return a=Math.pow((1-a)/(1+a),s),Math.tan(.5*(p-e))/a}function jt(t,e){for(var i=.5*t,a,s,r=p-2*Math.atan(e),n=0;n<=15;n++)if(a=t*Math.sin(r),s=p-2*Math.atan(e*Math.pow((1-a)/(1+a),i))-r,r+=s,Math.abs(s)<=1e-10)return r;return-9999}function ro(){var t=this.b/this.a;this.es=1-t*t,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=We(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function ao(t){var e=t.x,i=t.y;if(i*me>90&&i*me<-90&&e*me>180&&e*me<-180)return null;var a,s;if(Math.abs(Math.abs(i)-p)<=x)return null;if(this.sphere)a=this.x0+this.a*this.k0*E(e-this.long0,this.over),s=this.y0+this.a*this.k0*Math.log(Math.tan(D+.5*i));else{var r=Math.sin(i),n=Fe(this.e,i,r);a=this.x0+this.a*this.k0*E(e-this.long0,this.over),s=this.y0-this.a*this.k0*Math.log(n)}return t.x=a,t.y=s,t}function no(t){var e=t.x-this.x0,i=t.y-this.y0,a,s;if(this.sphere)s=p-2*Math.atan(Math.exp(-i/(this.a*this.k0)));else{var r=Math.exp(-i/(this.a*this.k0));if(s=jt(this.e,r),s===-9999)return null}return a=E(this.long0+e/(this.a*this.k0),this.over),t.x=a,t.y=s,t}var oo=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","Mercator_Variant_A","merc"];const fo={init:ro,forward:ao,inverse:no,names:oo};function lo(){}function Qs(t){return t}var Nr=["longlat","identity"];const ho={init:lo,forward:Qs,inverse:Qs,names:Nr};var uo=[fo,ho],st={},pt=[];function wr(t,e){var i=pt.length;return t.names?(pt[i]=t,t.names.forEach(function(a){st[a.toLowerCase()]=i}),this):(console.log(e),!0)}function Ir(t){return t.replace(/[-\(\)\s]+/g," ").trim().replace(/ /g,"_")}function co(t){if(!t)return!1;var e=t.toLowerCase();if(typeof st[e]<"u"&&pt[st[e]]||(e=Ir(e),e in st&&pt[st[e]]))return pt[st[e]]}function mo(){uo.forEach(wr)}const go={start:mo,add:wr,get:co};var br={MERIT:{a:6378137,rf:298.257,ellipseName:"MERIT 1983"},SGS85:{a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"},GRS80:{a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"},IAU76:{a:6378140,rf:298.257,ellipseName:"IAU 1976"},airy:{a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"},APL4:{a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"},NWL9D:{a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"},mod_airy:{a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"},andrae:{a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"},aust_SA:{a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"},GRS67:{a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"},bessel:{a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"},bess_nam:{a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"},clrk66:{a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"},clrk80:{a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."},clrk80ign:{a:63782492e-1,b:6356515,rf:293.4660213,ellipseName:"Clarke 1880 (IGN)"},clrk58:{a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"},CPM:{a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"},delmbr:{a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"},engelis:{a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"},evrst30:{a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"},evrst48:{a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"},evrst56:{a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"},evrst69:{a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"},evrstSS:{a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"},fschr60:{a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"},fschr60m:{a:6378155,rf:298.3,ellipseName:"Fischer 1960"},fschr68:{a:6378150,rf:298.3,ellipseName:"Fischer 1968"},helmert:{a:6378200,rf:298.3,ellipseName:"Helmert 1906"},hough:{a:6378270,rf:297,ellipseName:"Hough"},intl:{a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"},kaula:{a:6378163,rf:298.24,ellipseName:"Kaula 1961"},lerch:{a:6378139,rf:298.257,ellipseName:"Lerch 1979"},mprts:{a:6397300,rf:191,ellipseName:"Maupertius 1738"},new_intl:{a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"},plessis:{a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"},krass:{a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"},SEasia:{a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"},walbeck:{a:6376896,b:63558348467e-4,ellipseName:"Walbeck"},WGS60:{a:6378165,rf:298.3,ellipseName:"WGS 60"},WGS66:{a:6378145,rf:298.25,ellipseName:"WGS 66"},WGS7:{a:6378135,rf:298.26,ellipseName:"WGS 72"},WGS84:{a:6378137,rf:298.257223563,ellipseName:"WGS 84"},sphere:{a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"}};const vo=br.WGS84;function _o(t,e,i,a){var s=t*t,r=e*e,n=(s-r)/s,o=0;a?(t*=1-n*(On+n*(Dn+n*Fn)),s=t*t,n=0):o=Math.sqrt(n);var f=(s-r)/r;return{es:n,e:o,ep2:f}}function po(t,e,i,a,s){if(!t){var r=Je(br,a);r||(r=vo),t=r.a,e=r.b,i=r.rf}return i&&!e&&(e=(1-1/i)*t),(i===0||Math.abs(t-e)<x)&&(s=!0,e=t),{a:t,b:e,rf:i,sphere:s}}var oi={wgs84:{towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"},ch1903:{towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"},ggrs87:{towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"},nad83:{towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"},nad27:{nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"},potsdam:{towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"},carthage:{towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"},hermannskogel:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"},mgi:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Militar-Geographische Institut"},osni52:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"},ire65:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"},rassadiran:{towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"},nzgd49:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"},osgb36:{towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Ordnance Survey of Great Britain 1936"},s_jtsk:{towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"},beduaram:{towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"},gunung_segara:{towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"},rnb72:{towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"},EPSG_5451:{towgs84:"6.41,-49.05,-11.28,1.5657,0.5242,6.9718,-5.7649"},IGNF_LURESG:{towgs84:"-192.986,13.673,-39.309,-0.4099,-2.9332,2.6881,0.43"},EPSG_4614:{towgs84:"-119.4248,-303.65872,-11.00061,1.164298,0.174458,1.096259,3.657065"},EPSG_4615:{towgs84:"-494.088,-312.129,279.877,-1.423,-1.013,1.59,-0.748"},ESRI_37241:{towgs84:"-76.822,257.457,-12.817,2.136,-0.033,-2.392,-0.031"},ESRI_37249:{towgs84:"-440.296,58.548,296.265,1.128,10.202,4.559,-0.438"},ESRI_37245:{towgs84:"-511.151,-181.269,139.609,1.05,2.703,1.798,3.071"},EPSG_4178:{towgs84:"24.9,-126.4,-93.2,-0.063,-0.247,-0.041,1.01"},EPSG_4622:{towgs84:"-472.29,-5.63,-304.12,0.4362,-0.8374,0.2563,1.8984"},EPSG_4625:{towgs84:"126.93,547.94,130.41,-2.7867,5.1612,-0.8584,13.8227"},EPSG_5252:{towgs84:"0.023,0.036,-0.068,0.00176,0.00912,-0.01136,0.00439"},EPSG_4314:{towgs84:"597.1,71.4,412.1,0.894,0.068,-1.563,7.58"},EPSG_4282:{towgs84:"-178.3,-316.7,-131.5,5.278,6.077,10.979,19.166"},EPSG_4231:{towgs84:"-83.11,-97.38,-117.22,0.005693,-0.044698,0.044285,0.1218"},EPSG_4274:{towgs84:"-230.994,102.591,25.199,0.633,-0.239,0.9,1.95"},EPSG_4134:{towgs84:"-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.71006"},EPSG_4254:{towgs84:"18.38,192.45,96.82,0.056,-0.142,-0.2,-0.0013"},EPSG_4159:{towgs84:"-194.513,-63.978,-25.759,-3.4027,3.756,-3.352,-0.9175"},EPSG_4687:{towgs84:"0.072,-0.507,-0.245,0.0183,-0.0003,0.007,-0.0093"},EPSG_4227:{towgs84:"-83.58,-397.54,458.78,-17.595,-2.847,4.256,3.225"},EPSG_4746:{towgs84:"599.4,72.4,419.2,-0.062,-0.022,-2.723,6.46"},EPSG_4745:{towgs84:"612.4,77,440.2,-0.054,0.057,-2.797,2.55"},EPSG_6311:{towgs84:"8.846,-4.394,-1.122,-0.00237,-0.146528,0.130428,0.783926"},EPSG_4289:{towgs84:"565.7381,50.4018,465.2904,-0.395026,0.330772,-1.876073,4.07244"},EPSG_4230:{towgs84:"-68.863,-134.888,-111.49,-0.53,-0.14,0.57,-3.4"},EPSG_4154:{towgs84:"-123.02,-158.95,-168.47"},EPSG_4156:{towgs84:"570.8,85.7,462.8,4.998,1.587,5.261,3.56"},EPSG_4299:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4179:{towgs84:"33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84"},EPSG_4313:{towgs84:"-106.8686,52.2978,-103.7239,0.3366,-0.457,1.8422,-1.2747"},EPSG_4194:{towgs84:"163.511,127.533,-159.789"},EPSG_4195:{towgs84:"105,326,-102.5"},EPSG_4196:{towgs84:"-45,417,-3.5"},EPSG_4611:{towgs84:"-162.619,-276.959,-161.764,0.067753,-2.243648,-1.158828,-1.094246"},EPSG_4633:{towgs84:"137.092,131.66,91.475,-1.9436,-11.5993,-4.3321,-7.4824"},EPSG_4641:{towgs84:"-408.809,366.856,-412.987,1.8842,-0.5308,2.1655,-121.0993"},EPSG_4643:{towgs84:"-480.26,-438.32,-643.429,16.3119,20.1721,-4.0349,-111.7002"},EPSG_4300:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4188:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4660:{towgs84:"982.6087,552.753,-540.873,6.681627,-31.611492,-19.848161,16.805"},EPSG_4662:{towgs84:"97.295,-263.247,310.882,-1.5999,0.8386,3.1409,13.3259"},EPSG_3906:{towgs84:"577.88891,165.22205,391.18289,4.9145,-0.94729,-13.05098,7.78664"},EPSG_4307:{towgs84:"-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547"},EPSG_6892:{towgs84:"-76.269,-16.683,68.562,-6.275,10.536,-4.286,-13.686"},EPSG_4690:{towgs84:"221.597,152.441,176.523,2.403,1.3893,0.884,11.4648"},EPSG_4691:{towgs84:"218.769,150.75,176.75,3.5231,2.0037,1.288,10.9817"},EPSG_4629:{towgs84:"72.51,345.411,79.241,-1.5862,-0.8826,-0.5495,1.3653"},EPSG_4630:{towgs84:"165.804,216.213,180.26,-0.6251,-0.4515,-0.0721,7.4111"},EPSG_4692:{towgs84:"217.109,86.452,23.711,0.0183,-0.0003,0.007,-0.0093"},EPSG_9333:{towgs84:"0,0,0,-0.008393,0.000749,-0.010276,0"},EPSG_9059:{towgs84:"0,0,0"},EPSG_4312:{towgs84:"601.705,84.263,485.227,4.7354,1.3145,5.393,-2.3887"},EPSG_4123:{towgs84:"-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496"},EPSG_4309:{towgs84:"-124.45,183.74,44.64,-0.4384,0.5446,-0.9706,-2.1365"},ESRI_104106:{towgs84:"-283.088,-70.693,117.445,-1.157,0.059,-0.652,-4.058"},EPSG_4281:{towgs84:"-219.247,-73.802,269.529"},EPSG_4322:{towgs84:"0,0,4.5"},EPSG_4324:{towgs84:"0,0,1.9"},EPSG_4284:{towgs84:"43.822,-108.842,-119.585,1.455,-0.761,0.737,0.549"},EPSG_4277:{towgs84:"446.448,-125.157,542.06,0.15,0.247,0.842,-20.489"},EPSG_4207:{towgs84:"-282.1,-72.2,120,-1.529,0.145,-0.89,-4.46"},EPSG_4688:{towgs84:"347.175,1077.618,2623.677,33.9058,-70.6776,9.4013,186.0647"},EPSG_4689:{towgs84:"410.793,54.542,80.501,-2.5596,-2.3517,-0.6594,17.3218"},EPSG_4720:{towgs84:"0,0,4.5"},EPSG_4273:{towgs84:"278.3,93,474.5,7.889,0.05,-6.61,6.21"},EPSG_4240:{towgs84:"204.64,834.74,293.8"},EPSG_4817:{towgs84:"278.3,93,474.5,7.889,0.05,-6.61,6.21"},ESRI_104131:{towgs84:"426.62,142.62,460.09,4.98,4.49,-12.42,-17.1"},EPSG_4265:{towgs84:"-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68"},EPSG_4263:{towgs84:"-111.92,-87.85,114.5,1.875,0.202,0.219,0.032"},EPSG_4298:{towgs84:"-689.5937,623.84046,-65.93566,-0.02331,1.17094,-0.80054,5.88536"},EPSG_4270:{towgs84:"-253.4392,-148.452,386.5267,0.15605,0.43,-0.1013,-0.0424"},EPSG_4229:{towgs84:"-121.8,98.1,-10.7"},EPSG_4220:{towgs84:"-55.5,-348,-229.2"},EPSG_4214:{towgs84:"12.646,-155.176,-80.863"},EPSG_4232:{towgs84:"-345,3,223"},EPSG_4238:{towgs84:"-1.977,-13.06,-9.993,0.364,0.254,0.689,-1.037"},EPSG_4168:{towgs84:"-170,33,326"},EPSG_4131:{towgs84:"199,931,318.9"},EPSG_4152:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_5228:{towgs84:"572.213,85.334,461.94,4.9732,1.529,5.2484,3.5378"},EPSG_8351:{towgs84:"485.021,169.465,483.839,7.786342,4.397554,4.102655,0"},EPSG_4683:{towgs84:"-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06"},EPSG_4133:{towgs84:"0,0,0"},EPSG_7373:{towgs84:"0.819,-0.5762,-1.6446,-0.00378,-0.03317,0.00318,0.0693"},EPSG_9075:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_9072:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_9294:{towgs84:"1.16835,-1.42001,-2.24431,-0.00822,-0.05508,0.01818,0.23388"},EPSG_4212:{towgs84:"-267.434,173.496,181.814,-13.4704,8.7154,7.3926,14.7492"},EPSG_4191:{towgs84:"-44.183,-0.58,-38.489,2.3867,2.7072,-3.5196,-8.2703"},EPSG_4237:{towgs84:"52.684,-71.194,-13.975,-0.312,-0.1063,-0.3729,1.0191"},EPSG_4740:{towgs84:"-1.08,-0.27,-0.9"},EPSG_4124:{towgs84:"419.3836,99.3335,591.3451,0.850389,1.817277,-7.862238,-0.99496"},EPSG_5681:{towgs84:"584.9636,107.7175,413.8067,1.1155,0.2824,-3.1384,7.9922"},EPSG_4141:{towgs84:"23.772,17.49,17.859,-0.3132,-1.85274,1.67299,-5.4262"},EPSG_4204:{towgs84:"-85.645,-273.077,-79.708,2.289,-1.421,2.532,3.194"},EPSG_4319:{towgs84:"226.702,-193.337,-35.371,-2.229,-4.391,9.238,0.9798"},EPSG_4200:{towgs84:"24.82,-131.21,-82.66"},EPSG_4130:{towgs84:"0,0,0"},EPSG_4127:{towgs84:"-82.875,-57.097,-156.768,-2.158,1.524,-0.982,-0.359"},EPSG_4149:{towgs84:"674.374,15.056,405.346"},EPSG_4617:{towgs84:"-0.991,1.9072,0.5129,0.02579,0.00965,0.01166,0"},EPSG_4663:{towgs84:"-210.502,-66.902,-48.476,2.094,-15.067,-5.817,0.485"},EPSG_4664:{towgs84:"-211.939,137.626,58.3,-0.089,0.251,0.079,0.384"},EPSG_4665:{towgs84:"-105.854,165.589,-38.312,-0.003,-0.026,0.024,-0.048"},EPSG_4666:{towgs84:"631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"},EPSG_4756:{towgs84:"-192.873,-39.382,-111.202,-0.00205,-0.0005,0.00335,0.0188"},EPSG_4723:{towgs84:"-179.483,-69.379,-27.584,-7.862,8.163,6.042,-13.925"},EPSG_4726:{towgs84:"8.853,-52.644,180.304,-0.393,-2.323,2.96,-24.081"},EPSG_4267:{towgs84:"-8.0,160.0,176.0"},EPSG_5365:{towgs84:"-0.16959,0.35312,0.51846,0.03385,-0.16325,0.03446,0.03693"},EPSG_4218:{towgs84:"304.5,306.5,-318.1"},EPSG_4242:{towgs84:"-33.722,153.789,94.959,-8.581,-4.478,4.54,8.95"},EPSG_4216:{towgs84:"-292.295,248.758,429.447,4.9971,2.99,6.6906,1.0289"},ESRI_104105:{towgs84:"631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"},ESRI_104129:{towgs84:"0,0,0"},EPSG_4673:{towgs84:"174.05,-25.49,112.57"},EPSG_4202:{towgs84:"-124,-60,154"},EPSG_4203:{towgs84:"-117.763,-51.51,139.061,0.292,0.443,0.277,-0.191"},EPSG_3819:{towgs84:"595.48,121.69,515.35,4.115,-2.9383,0.853,-3.408"},EPSG_8694:{towgs84:"-93.799,-132.737,-219.073,-1.844,0.648,-6.37,-0.169"},EPSG_4145:{towgs84:"275.57,676.78,229.6"},EPSG_4283:{towgs84:"0.06155,-0.01087,-0.04019,0.039492,0.032722,0.032898,-0.009994"},EPSG_4317:{towgs84:"2.3287,-147.0425,-92.0802,-0.309248,0.324822,0.497299,5.689063"},EPSG_4272:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993"},EPSG_4248:{towgs84:"-307.7,265.3,-363.5"},EPSG_5561:{towgs84:"24,-121,-76"},EPSG_5233:{towgs84:"-0.293,766.95,87.713,0.195704,1.695068,3.473016,-0.039338"},ESRI_104130:{towgs84:"-86,-98,-119"},ESRI_104102:{towgs84:"682,-203,480"},ESRI_37207:{towgs84:"7,-10,-26"},EPSG_4675:{towgs84:"59.935,118.4,-10.871"},ESRI_104109:{towgs84:"-89.121,-348.182,260.871"},ESRI_104112:{towgs84:"-185.583,-230.096,281.361"},ESRI_104113:{towgs84:"25.1,-275.6,222.6"},IGNF_WGS72G:{towgs84:"0,12,6"},IGNF_NTFG:{towgs84:"-168,-60,320"},IGNF_EFATE57G:{towgs84:"-127,-769,472"},IGNF_PGP50G:{towgs84:"324.8,153.6,172.1"},IGNF_REUN47G:{towgs84:"94,-948,-1262"},IGNF_CSG67G:{towgs84:"-186,230,110"},IGNF_GUAD48G:{towgs84:"-467,-16,-300"},IGNF_TAHI51G:{towgs84:"162,117,154"},IGNF_TAHAAG:{towgs84:"65,342,77"},IGNF_NUKU72G:{towgs84:"84,274,65"},IGNF_PETRELS72G:{towgs84:"365,194,166"},IGNF_WALL78G:{towgs84:"253,-133,-127"},IGNF_MAYO50G:{towgs84:"-382,-59,-262"},IGNF_TANNAG:{towgs84:"-139,-967,436"},IGNF_IGN72G:{towgs84:"-13,-348,292"},IGNF_ATIGG:{towgs84:"1118,23,66"},IGNF_FANGA84G:{towgs84:"150.57,158.33,118.32"},IGNF_RUSAT84G:{towgs84:"202.13,174.6,-15.74"},IGNF_KAUE70G:{towgs84:"126.74,300.1,-75.49"},IGNF_MOP90G:{towgs84:"-10.8,-1.8,12.77"},IGNF_MHPF67G:{towgs84:"338.08,212.58,-296.17"},IGNF_TAHI79G:{towgs84:"160.61,116.05,153.69"},IGNF_ANAA92G:{towgs84:"1.5,3.84,4.81"},IGNF_MARQUI72G:{towgs84:"330.91,-13.92,58.56"},IGNF_APAT86G:{towgs84:"143.6,197.82,74.05"},IGNF_TUBU69G:{towgs84:"237.17,171.61,-77.84"},IGNF_STPM50G:{towgs84:"11.363,424.148,373.13"},EPSG_4150:{towgs84:"674.374,15.056,405.346"},EPSG_4754:{towgs84:"-208.4058,-109.8777,-2.5764"},ESRI_104101:{towgs84:"372.87,149.23,585.29"},EPSG_4693:{towgs84:"0,-0.15,0.68"},EPSG_6207:{towgs84:"293.17,726.18,245.36"},EPSG_4153:{towgs84:"-133.63,-157.5,-158.62"},EPSG_4132:{towgs84:"-241.54,-163.64,396.06"},EPSG_4221:{towgs84:"-154.5,150.7,100.4"},EPSG_4266:{towgs84:"-80.7,-132.5,41.1"},EPSG_4193:{towgs84:"-70.9,-151.8,-41.4"},EPSG_5340:{towgs84:"-0.41,0.46,-0.35"},EPSG_4246:{towgs84:"-294.7,-200.1,525.5"},EPSG_4318:{towgs84:"-3.2,-5.7,2.8"},EPSG_4121:{towgs84:"-199.87,74.79,246.62"},EPSG_4223:{towgs84:"-260.1,5.5,432.2"},EPSG_4158:{towgs84:"-0.465,372.095,171.736"},EPSG_4285:{towgs84:"-128.16,-282.42,21.93"},EPSG_4613:{towgs84:"-404.78,685.68,45.47"},EPSG_4607:{towgs84:"195.671,332.517,274.607"},EPSG_4475:{towgs84:"-381.788,-57.501,-256.673"},EPSG_4208:{towgs84:"-157.84,308.54,-146.6"},EPSG_4743:{towgs84:"70.995,-335.916,262.898"},EPSG_4710:{towgs84:"-323.65,551.39,-491.22"},EPSG_7881:{towgs84:"-0.077,0.079,0.086"},EPSG_4682:{towgs84:"283.729,735.942,261.143"},EPSG_4739:{towgs84:"-156,-271,-189"},EPSG_4679:{towgs84:"-80.01,253.26,291.19"},EPSG_4750:{towgs84:"-56.263,16.136,-22.856"},EPSG_4644:{towgs84:"-10.18,-350.43,291.37"},EPSG_4695:{towgs84:"-103.746,-9.614,-255.95"},EPSG_4292:{towgs84:"-355,21,72"},EPSG_4302:{towgs84:"-61.702,284.488,472.052"},EPSG_4143:{towgs84:"-124.76,53,466.79"},EPSG_4606:{towgs84:"-153,153,307"},EPSG_4699:{towgs84:"-770.1,158.4,-498.2"},EPSG_4247:{towgs84:"-273.5,110.6,-357.9"},EPSG_4160:{towgs84:"8.88,184.86,106.69"},EPSG_4161:{towgs84:"-233.43,6.65,173.64"},EPSG_9251:{towgs84:"-9.5,122.9,138.2"},EPSG_9253:{towgs84:"-78.1,101.6,133.3"},EPSG_4297:{towgs84:"-198.383,-240.517,-107.909"},EPSG_4269:{towgs84:"0,0,0"},EPSG_4301:{towgs84:"-147,506,687"},EPSG_4618:{towgs84:"-59,-11,-52"},EPSG_4612:{towgs84:"0,0,0"},EPSG_4678:{towgs84:"44.585,-131.212,-39.544"},EPSG_4250:{towgs84:"-130,29,364"},EPSG_4144:{towgs84:"214,804,268"},EPSG_4147:{towgs84:"-17.51,-108.32,-62.39"},EPSG_4259:{towgs84:"-254.1,-5.36,-100.29"},EPSG_4164:{towgs84:"-76,-138,67"},EPSG_4211:{towgs84:"-378.873,676.002,-46.255"},EPSG_4182:{towgs84:"-422.651,-172.995,84.02"},EPSG_4224:{towgs84:"-143.87,243.37,-33.52"},EPSG_4225:{towgs84:"-205.57,168.77,-4.12"},EPSG_5527:{towgs84:"-67.35,3.88,-38.22"},EPSG_4752:{towgs84:"98,390,-22"},EPSG_4310:{towgs84:"-30,190,89"},EPSG_9248:{towgs84:"-192.26,65.72,132.08"},EPSG_4680:{towgs84:"124.5,-63.5,-281"},EPSG_4701:{towgs84:"-79.9,-158,-168.9"},EPSG_4706:{towgs84:"-146.21,112.63,4.05"},EPSG_4805:{towgs84:"682,-203,480"},EPSG_4201:{towgs84:"-165,-11,206"},EPSG_4210:{towgs84:"-157,-2,-299"},EPSG_4183:{towgs84:"-104,167,-38"},EPSG_4139:{towgs84:"11,72,-101"},EPSG_4668:{towgs84:"-86,-98,-119"},EPSG_4717:{towgs84:"-2,151,181"},EPSG_4732:{towgs84:"102,52,-38"},EPSG_4280:{towgs84:"-377,681,-50"},EPSG_4209:{towgs84:"-138,-105,-289"},EPSG_4261:{towgs84:"31,146,47"},EPSG_4658:{towgs84:"-73,46,-86"},EPSG_4721:{towgs84:"265.025,384.929,-194.046"},EPSG_4222:{towgs84:"-136,-108,-292"},EPSG_4601:{towgs84:"-255,-15,71"},EPSG_4602:{towgs84:"725,685,536"},EPSG_4603:{towgs84:"72,213.7,93"},EPSG_4605:{towgs84:"9,183,236"},EPSG_4621:{towgs84:"137,248,-430"},EPSG_4657:{towgs84:"-28,199,5"},EPSG_4316:{towgs84:"103.25,-100.4,-307.19"},EPSG_4642:{towgs84:"-13,-348,292"},EPSG_4698:{towgs84:"145,-187,103"},EPSG_4192:{towgs84:"-206.1,-174.7,-87.7"},EPSG_4311:{towgs84:"-265,120,-358"},EPSG_4135:{towgs84:"58,-283,-182"},ESRI_104138:{towgs84:"198,-226,-347"},EPSG_4245:{towgs84:"-11,851,5"},EPSG_4142:{towgs84:"-125,53,467"},EPSG_4213:{towgs84:"-106,-87,188"},EPSG_4253:{towgs84:"-133,-77,-51"},EPSG_4129:{towgs84:"-132,-110,-335"},EPSG_4713:{towgs84:"-77,-128,142"},EPSG_4239:{towgs84:"217,823,299"},EPSG_4146:{towgs84:"295,736,257"},EPSG_4155:{towgs84:"-83,37,124"},EPSG_4165:{towgs84:"-173,253,27"},EPSG_4672:{towgs84:"175,-38,113"},EPSG_4236:{towgs84:"-637,-549,-203"},EPSG_4251:{towgs84:"-90,40,88"},EPSG_4271:{towgs84:"-2,374,172"},EPSG_4175:{towgs84:"-88,4,101"},EPSG_4716:{towgs84:"298,-304,-375"},EPSG_4315:{towgs84:"-23,259,-9"},EPSG_4744:{towgs84:"-242.2,-144.9,370.3"},EPSG_4244:{towgs84:"-97,787,86"},EPSG_4293:{towgs84:"616,97,-251"},EPSG_4714:{towgs84:"-127,-769,472"},EPSG_4736:{towgs84:"260,12,-147"},EPSG_6883:{towgs84:"-235,-110,393"},EPSG_6894:{towgs84:"-63,176,185"},EPSG_4205:{towgs84:"-43,-163,45"},EPSG_4256:{towgs84:"41,-220,-134"},EPSG_4262:{towgs84:"639,405,60"},EPSG_4604:{towgs84:"174,359,365"},EPSG_4169:{towgs84:"-115,118,426"},EPSG_4620:{towgs84:"-106,-129,165"},EPSG_4184:{towgs84:"-203,141,53"},EPSG_4616:{towgs84:"-289,-124,60"},EPSG_9403:{towgs84:"-307,-92,127"},EPSG_4684:{towgs84:"-133,-321,50"},EPSG_4708:{towgs84:"-491,-22,435"},EPSG_4707:{towgs84:"114,-116,-333"},EPSG_4709:{towgs84:"145,75,-272"},EPSG_4712:{towgs84:"-205,107,53"},EPSG_4711:{towgs84:"124,-234,-25"},EPSG_4718:{towgs84:"230,-199,-752"},EPSG_4719:{towgs84:"211,147,111"},EPSG_4724:{towgs84:"208,-435,-229"},EPSG_4725:{towgs84:"189,-79,-202"},EPSG_4735:{towgs84:"647,1777,-1124"},EPSG_4722:{towgs84:"-794,119,-298"},EPSG_4728:{towgs84:"-307,-92,127"},EPSG_4734:{towgs84:"-632,438,-609"},EPSG_4727:{towgs84:"912,-58,1227"},EPSG_4729:{towgs84:"185,165,42"},EPSG_4730:{towgs84:"170,42,84"},EPSG_4733:{towgs84:"276,-57,149"},ESRI_37218:{towgs84:"230,-199,-752"},ESRI_37240:{towgs84:"-7,215,225"},ESRI_37221:{towgs84:"252,-209,-751"},ESRI_4305:{towgs84:"-123,-206,219"},ESRI_104139:{towgs84:"-73,-247,227"},EPSG_4748:{towgs84:"51,391,-36"},EPSG_4219:{towgs84:"-384,664,-48"},EPSG_4255:{towgs84:"-333,-222,114"},EPSG_4257:{towgs84:"-587.8,519.75,145.76"},EPSG_4646:{towgs84:"-963,510,-359"},EPSG_6881:{towgs84:"-24,-203,268"},EPSG_6882:{towgs84:"-183,-15,273"},EPSG_4715:{towgs84:"-104,-129,239"},IGNF_RGF93GDD:{towgs84:"0,0,0"},IGNF_RGM04GDD:{towgs84:"0,0,0"},IGNF_RGSPM06GDD:{towgs84:"0,0,0"},IGNF_RGTAAF07GDD:{towgs84:"0,0,0"},IGNF_RGFG95GDD:{towgs84:"0,0,0"},IGNF_RGNCG:{towgs84:"0,0,0"},IGNF_RGPFGDD:{towgs84:"0,0,0"},IGNF_ETRS89G:{towgs84:"0,0,0"},IGNF_RGR92GDD:{towgs84:"0,0,0"},EPSG_4173:{towgs84:"0,0,0"},EPSG_4180:{towgs84:"0,0,0"},EPSG_4619:{towgs84:"0,0,0"},EPSG_4667:{towgs84:"0,0,0"},EPSG_4075:{towgs84:"0,0,0"},EPSG_6706:{towgs84:"0,0,0"},EPSG_7798:{towgs84:"0,0,0"},EPSG_4661:{towgs84:"0,0,0"},EPSG_4669:{towgs84:"0,0,0"},EPSG_8685:{towgs84:"0,0,0"},EPSG_4151:{towgs84:"0,0,0"},EPSG_9702:{towgs84:"0,0,0"},EPSG_4758:{towgs84:"0,0,0"},EPSG_4761:{towgs84:"0,0,0"},EPSG_4765:{towgs84:"0,0,0"},EPSG_8997:{towgs84:"0,0,0"},EPSG_4023:{towgs84:"0,0,0"},EPSG_4670:{towgs84:"0,0,0"},EPSG_4694:{towgs84:"0,0,0"},EPSG_4148:{towgs84:"0,0,0"},EPSG_4163:{towgs84:"0,0,0"},EPSG_4167:{towgs84:"0,0,0"},EPSG_4189:{towgs84:"0,0,0"},EPSG_4190:{towgs84:"0,0,0"},EPSG_4176:{towgs84:"0,0,0"},EPSG_4659:{towgs84:"0,0,0"},EPSG_3824:{towgs84:"0,0,0"},EPSG_3889:{towgs84:"0,0,0"},EPSG_4046:{towgs84:"0,0,0"},EPSG_4081:{towgs84:"0,0,0"},EPSG_4558:{towgs84:"0,0,0"},EPSG_4483:{towgs84:"0,0,0"},EPSG_5013:{towgs84:"0,0,0"},EPSG_5264:{towgs84:"0,0,0"},EPSG_5324:{towgs84:"0,0,0"},EPSG_5354:{towgs84:"0,0,0"},EPSG_5371:{towgs84:"0,0,0"},EPSG_5373:{towgs84:"0,0,0"},EPSG_5381:{towgs84:"0,0,0"},EPSG_5393:{towgs84:"0,0,0"},EPSG_5489:{towgs84:"0,0,0"},EPSG_5593:{towgs84:"0,0,0"},EPSG_6135:{towgs84:"0,0,0"},EPSG_6365:{towgs84:"0,0,0"},EPSG_5246:{towgs84:"0,0,0"},EPSG_7886:{towgs84:"0,0,0"},EPSG_8431:{towgs84:"0,0,0"},EPSG_8427:{towgs84:"0,0,0"},EPSG_8699:{towgs84:"0,0,0"},EPSG_8818:{towgs84:"0,0,0"},EPSG_4757:{towgs84:"0,0,0"},EPSG_9140:{towgs84:"0,0,0"},EPSG_8086:{towgs84:"0,0,0"},EPSG_4686:{towgs84:"0,0,0"},EPSG_4737:{towgs84:"0,0,0"},EPSG_4702:{towgs84:"0,0,0"},EPSG_4747:{towgs84:"0,0,0"},EPSG_4749:{towgs84:"0,0,0"},EPSG_4674:{towgs84:"0,0,0"},EPSG_4755:{towgs84:"0,0,0"},EPSG_4759:{towgs84:"0,0,0"},EPSG_4762:{towgs84:"0,0,0"},EPSG_4763:{towgs84:"0,0,0"},EPSG_4764:{towgs84:"0,0,0"},EPSG_4166:{towgs84:"0,0,0"},EPSG_4170:{towgs84:"0,0,0"},EPSG_5546:{towgs84:"0,0,0"},EPSG_7844:{towgs84:"0,0,0"},EPSG_4818:{towgs84:"589,76,480"},EPSG_10328:{towgs84:"0,0,0"},EPSG_9782:{towgs84:"0,0,0"},EPSG_9777:{towgs84:"0,0,0"},EPSG_10690:{towgs84:"0,0,0"},EPSG_10639:{towgs84:"0,0,0"},EPSG_10739:{towgs84:"0,0,0"},EPSG_7686:{towgs84:"0,0,0"},EPSG_8900:{towgs84:"0,0,0"},EPSG_5886:{towgs84:"0,0,0"},EPSG_7683:{towgs84:"0,0,0"},EPSG_6668:{towgs84:"0,0,0"},EPSG_20046:{towgs84:"0,0,0"},EPSG_10299:{towgs84:"0,0,0"},EPSG_10310:{towgs84:"0,0,0"},EPSG_10475:{towgs84:"0,0,0"},EPSG_4742:{towgs84:"0,0,0"},EPSG_10671:{towgs84:"0,0,0"},EPSG_10762:{towgs84:"0,0,0"},EPSG_10725:{towgs84:"0,0,0"},EPSG_10791:{towgs84:"0,0,0"},EPSG_10800:{towgs84:"0,0,0"},EPSG_10305:{towgs84:"0,0,0"},EPSG_10941:{towgs84:"0,0,0"},EPSG_10968:{towgs84:"0,0,0"},EPSG_10875:{towgs84:"0,0,0"},EPSG_6318:{towgs84:"0,0,0"},EPSG_10910:{towgs84:"0,0,0"}};for(var xo in oi){var wi=oi[xo];wi.datumName&&(oi[wi.datumName]=wi)}function So(t,e,i,a,s,r,n){var o={};return t===void 0||t==="none"?o.datum_type=Gi:o.datum_type=Ln,e&&(o.datum_params=e.map(parseFloat),(o.datum_params[0]!==0||o.datum_params[1]!==0||o.datum_params[2]!==0)&&(o.datum_type=lt),o.datum_params.length>3&&(o.datum_params[3]!==0||o.datum_params[4]!==0||o.datum_params[5]!==0||o.datum_params[6]!==0)&&(o.datum_type=ht,o.datum_params[3]*=Ot,o.datum_params[4]*=Ot,o.datum_params[5]*=Ot,o.datum_params[6]=o.datum_params[6]/1e6+1)),n&&(o.datum_type=Tt,o.grids=n),o.a=i,o.b=a,o.es=s,o.ep2=r,o}var $i={};function Eo(t,e,i){return e instanceof ArrayBuffer?To(t,e,i):{ready:Mo(t,e)}}function To(t,e,i){var a=!0;i!==void 0&&i.includeErrorFields===!1&&(a=!1);var s=new DataView(e),r=Co(s),n=Ao(s,r),o=No(s,n,r,a),f={header:n,subgrids:o};return $i[t]=f,f}async function Mo(t,e){for(var i=[],a=await e.getImageCount(),s=a-1;s>=0;s--){var r=await e.getImage(s),n=await r.readRasters(),o=n,f=[r.getWidth(),r.getHeight()],l=r.getBoundingBox().map(Js),c=[r.fileDirectory.ModelPixelScale[0],r.fileDirectory.ModelPixelScale[1]].map(Js),u=l[0]+(f[0]-1)*c[0],h=l[3]-(f[1]-1)*c[1],m=o[0],g=o[1],v=[];for(let M=f[1]-1;M>=0;M--)for(let A=f[0]-1;A>=0;A--){var _=M*f[0]+A;v.push([-Ze(g[_]),Ze(m[_])])}i.push({del:c,lim:f,ll:[-u,h],cvs:v})}var S={header:{nSubgrids:a},subgrids:i};return $i[t]=S,S}function yo(t){if(t===void 0)return null;var e=t.split(",");return e.map(Po)}function Po(t){if(t.length===0)return null;var e=t[0]==="@";return e&&(t=t.slice(1)),t==="null"?{name:"null",mandatory:!e,grid:null,isNull:!0}:{name:t,mandatory:!e,grid:$i[t]||null,isNull:!1}}function Js(t){return t*Math.PI/180}function Ze(t){return t/3600*Math.PI/180}function Co(t){var e=t.getInt32(8,!1);return e===11?!1:(e=t.getInt32(8,!0),e!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function Ao(t,e){return{nFields:t.getInt32(8,e),nSubgridFields:t.getInt32(24,e),nSubgrids:t.getInt32(40,e),shiftType:Vi(t,56,64).trim(),fromSemiMajorAxis:t.getFloat64(120,e),fromSemiMinorAxis:t.getFloat64(136,e),toSemiMajorAxis:t.getFloat64(152,e),toSemiMinorAxis:t.getFloat64(168,e)}}function Vi(t,e,i){return String.fromCharCode.apply(null,new Uint8Array(t.buffer.slice(e,i)))}function No(t,e,i,a){for(var s=176,r=[],n=0;n<e.nSubgrids;n++){var o=Io(t,s,i),f=bo(t,s,o,i,a),l=Math.round(1+(o.upperLongitude-o.lowerLongitude)/o.longitudeInterval),c=Math.round(1+(o.upperLatitude-o.lowerLatitude)/o.latitudeInterval);r.push({ll:[Ze(o.lowerLongitude),Ze(o.lowerLatitude)],del:[Ze(o.longitudeInterval),Ze(o.latitudeInterval)],lim:[l,c],count:o.gridNodeCount,cvs:wo(f)});var u=16;a===!1&&(u=8),s+=176+o.gridNodeCount*u}return r}function wo(t){return t.map(function(e){return[Ze(e.longitudeShift),Ze(e.latitudeShift)]})}function Io(t,e,i){return{name:Vi(t,e+8,e+16).trim(),parent:Vi(t,e+24,e+24+8).trim(),lowerLatitude:t.getFloat64(e+72,i),upperLatitude:t.getFloat64(e+88,i),lowerLongitude:t.getFloat64(e+104,i),upperLongitude:t.getFloat64(e+120,i),latitudeInterval:t.getFloat64(e+136,i),longitudeInterval:t.getFloat64(e+152,i),gridNodeCount:t.getInt32(e+168,i)}}function bo(t,e,i,a,s){var r=e+176,n=16;s===!1&&(n=8);for(var o=[],f=0;f<i.gridNodeCount;f++){var l={latitudeShift:t.getFloat32(r+f*n,a),longitudeShift:t.getFloat32(r+f*n+4,a)};s!==!1&&(l.latitudeAccuracy=t.getFloat32(r+f*n+8,a),l.longitudeAccuracy=t.getFloat32(r+f*n+12,a)),o.push(l)}return o}function Le(t,e){if(!(this instanceof Le))return new Le(t);this.forward=null,this.inverse=null,this.init=null,this.name,this.names=null,this.title,e=e||function(l){if(l)throw l};var i=so(t);if(typeof i!="object"){e("Could not parse to valid json: "+t);return}var a=Le.projections.get(i.projName);if(!a){e("Could not get projection name from: "+t);return}if(i.datumCode&&i.datumCode!=="none"){var s=Je(oi,i.datumCode);s&&(i.datum_params=i.datum_params||(s.towgs84?s.towgs84.split(","):null),i.ellps=s.ellipse,i.datumName=s.datumName?s.datumName:i.datumCode)}i.k0=i.k0||1,i.axis=i.axis||"enu",i.ellps=i.ellps||"wgs84",i.lat1=i.lat1||i.lat0;var r=po(i.a,i.b,i.rf,i.ellps,i.sphere),n=_o(r.a,r.b,r.rf,i.R_A),o=yo(i.nadgrids),f=i.datum||So(i.datumCode,i.datum_params,r.a,r.b,n.es,n.ep2,o);Ys(this,i),Ys(this,a),this.a=r.a,this.b=r.b,this.rf=r.rf,this.sphere=r.sphere,this.es=n.es,this.e=n.e,this.ep2=n.ep2,this.datum=f,"init"in this&&typeof this.init=="function"&&this.init(),e(null,this)}Le.projections=go;Le.projections.start();function Lo(t,e){return t.datum_type!==e.datum_type||t.a!==e.a||Math.abs(t.es-e.es)>5e-11?!1:t.datum_type===lt?t.datum_params[0]===e.datum_params[0]&&t.datum_params[1]===e.datum_params[1]&&t.datum_params[2]===e.datum_params[2]:t.datum_type===ht?t.datum_params[0]===e.datum_params[0]&&t.datum_params[1]===e.datum_params[1]&&t.datum_params[2]===e.datum_params[2]&&t.datum_params[3]===e.datum_params[3]&&t.datum_params[4]===e.datum_params[4]&&t.datum_params[5]===e.datum_params[5]&&t.datum_params[6]===e.datum_params[6]:!0}function Lr(t,e,i){var a=t.x,s=t.y,r=t.z?t.z:0,n,o,f,l;if(s<-p&&s>-1.001*p)s=-p;else if(s>p&&s<1.001*p)s=p;else{if(s<-p)return{x:-1/0,y:-1/0,z:t.z};if(s>p)return{x:1/0,y:1/0,z:t.z}}return a>Math.PI&&(a-=2*Math.PI),o=Math.sin(s),l=Math.cos(s),f=o*o,n=i/Math.sqrt(1-e*f),{x:(n+r)*l*Math.cos(a),y:(n+r)*l*Math.sin(a),z:(n*(1-e)+r)*o}}function Rr(t,e,i,a){var s=1e-12,r=s*s,n=30,o,f,l,c,u,h,m,g,v,_,S,M,A,L=t.x,b=t.y,O=t.z?t.z:0,k,re,Q;if(o=Math.sqrt(L*L+b*b),f=Math.sqrt(L*L+b*b+O*O),o/i<s){if(k=0,f/i<s)return re=p,Q=-a,{x:t.x,y:t.y,z:t.z}}else k=Math.atan2(b,L);l=O/f,c=o/f,u=1/Math.sqrt(1-e*(2-e)*c*c),g=c*(1-e)*u,v=l*u,A=0;do A++,m=i/Math.sqrt(1-e*v*v),Q=o*g+O*v-m*(1-e*v*v),h=e*m/(m+Q),u=1/Math.sqrt(1-h*(2-h)*c*c),_=c*(1-h)*u,S=l*u,M=S*g-_*v,g=_,v=S;while(M*M>r&&A<n);return re=Math.atan(S/Math.abs(_)),{x:k,y:re,z:Q}}function Ro(t,e,i){if(e===lt)return{x:t.x+i[0],y:t.y+i[1],z:t.z+i[2]};if(e===ht){var a=i[0],s=i[1],r=i[2],n=i[3],o=i[4],f=i[5],l=i[6];return{x:l*(t.x-f*t.y+o*t.z)+a,y:l*(f*t.x+t.y-n*t.z)+s,z:l*(-o*t.x+n*t.y+t.z)+r}}}function Oo(t,e,i){if(e===lt)return{x:t.x-i[0],y:t.y-i[1],z:t.z-i[2]};if(e===ht){var a=i[0],s=i[1],r=i[2],n=i[3],o=i[4],f=i[5],l=i[6],c=(t.x-a)/l,u=(t.y-s)/l,h=(t.z-r)/l;return{x:c+f*u-o*h,y:-f*c+u+n*h,z:o*c-n*u+h}}}function ii(t){return t===lt||t===ht}function Do(t,e,i){if(Lo(t,e)||t.datum_type===Gi||e.datum_type===Gi)return i;var a=t.a,s=t.es;if(t.datum_type===Tt){var r=er(t,!1,i);if(r!==0)return;a=Ws,s=Xs}var n=e.a,o=e.b,f=e.es;if(e.datum_type===Tt&&(n=Ws,o=Rn,f=Xs),s===f&&a===n&&!ii(t.datum_type)&&!ii(e.datum_type))return i;if(i=Lr(i,s,a),ii(t.datum_type)&&(i=Ro(i,t.datum_type,t.datum_params)),ii(e.datum_type)&&(i=Oo(i,e.datum_type,e.datum_params)),i=Rr(i,f,n,o),e.datum_type===Tt){var l=er(e,!0,i);if(l!==0)return}return i}function er(t,e,i){if(t.grids===null||t.grids.length===0)return console.log("Grid shift grids not found"),-1;var a={x:-i.x,y:i.y},s={x:Number.NaN,y:Number.NaN},r=[];e:for(var n=0;n<t.grids.length;n++){var o=t.grids[n];if(r.push(o.name),o.isNull){s=a;break}if(o.grid===null){if(o.mandatory)return console.log("Unable to find mandatory grid '"+o.name+"'"),-1;continue}for(var f=o.grid.subgrids,l=0,c=f.length;l<c;l++){var u=f[l],h=(Math.abs(u.del[1])+Math.abs(u.del[0]))/1e4,m=u.ll[0]-h,g=u.ll[1]-h,v=u.ll[0]+(u.lim[0]-1)*u.del[0]+h,_=u.ll[1]+(u.lim[1]-1)*u.del[1]+h;if(!(g>a.y||m>a.x||_<a.y||v<a.x)&&(s=Fo(a,e,u),!isNaN(s.x)))break e}}return isNaN(s.x)?(console.log("Failed to find a grid shift table for location '"+-a.x*me+" "+a.y*me+" tried: '"+r+"'"),-1):(i.x=-s.x,i.y=s.y,0)}function Fo(t,e,i){var a={x:Number.NaN,y:Number.NaN};if(isNaN(t.x))return a;var s={x:t.x,y:t.y};s.x-=i.ll[0],s.y-=i.ll[1],s.x=E(s.x-Math.PI)+Math.PI;var r=tr(s,i);if(e){if(isNaN(r.x))return a;r.x=s.x-r.x,r.y=s.y-r.y;var n=9,o=1e-12,f,l;do{if(l=tr(r,i),isNaN(l.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}f={x:s.x-(l.x+r.x),y:s.y-(l.y+r.y)},r.x+=f.x,r.y+=f.y}while(n--&&Math.abs(f.x)>o&&Math.abs(f.y)>o);if(n<0)return console.log("Inverse grid shift iterator failed to converge."),a;a.x=E(r.x+i.ll[0]),a.y=r.y+i.ll[1]}else isNaN(r.x)||(a.x=t.x+r.x,a.y=t.y+r.y);return a}function tr(t,e){var i={x:t.x/e.del[0],y:t.y/e.del[1]},a={x:Math.floor(i.x),y:Math.floor(i.y)},s={x:i.x-1*a.x,y:i.y-1*a.y},r={x:Number.NaN,y:Number.NaN},n;if(a.x<0||a.x>=e.lim[0]||a.y<0||a.y>=e.lim[1])return r;n=a.y*e.lim[0]+a.x;var o={x:e.cvs[n][0],y:e.cvs[n][1]};n++;var f={x:e.cvs[n][0],y:e.cvs[n][1]};n+=e.lim[0];var l={x:e.cvs[n][0],y:e.cvs[n][1]};n--;var c={x:e.cvs[n][0],y:e.cvs[n][1]},u=s.x*s.y,h=s.x*(1-s.y),m=(1-s.x)*(1-s.y),g=(1-s.x)*s.y;return r.x=m*o.x+h*f.x+g*c.x+u*l.x,r.y=m*o.y+h*f.y+g*c.y+u*l.y,r}function ir(t,e,i){var a=i.x,s=i.y,r=i.z||0,n,o,f,l={};for(f=0;f<3;f++)if(!(e&&f===2&&i.z===void 0))switch(f===0?(n=a,"ew".indexOf(t.axis[f])!==-1?o="x":o="y"):f===1?(n=s,"ns".indexOf(t.axis[f])!==-1?o="y":o="x"):(n=r,o="z"),t.axis[f]){case"e":l[o]=n;break;case"w":l[o]=-n;break;case"n":l[o]=n;break;case"s":l[o]=-n;break;case"u":i[o]!==void 0&&(l.z=n);break;case"d":i[o]!==void 0&&(l.z=-n);break;default:return null}return l}function Or(t){var e={x:t[0],y:t[1]};return t.length>2&&(e.z=t[2]),t.length>3&&(e.m=t[3]),e}function Go(t){sr(t.x),sr(t.y)}function sr(t){if(typeof Number.isFinite=="function"){if(Number.isFinite(t))return;throw new TypeError("coordinates must be finite numbers")}if(typeof t!="number"||t!==t||!isFinite(t))throw new TypeError("coordinates must be finite numbers")}function Uo(t,e){return(t.datum.datum_type===lt||t.datum.datum_type===ht||t.datum.datum_type===Tt)&&e.datumCode!=="WGS84"||(e.datum.datum_type===lt||e.datum.datum_type===ht||e.datum.datum_type===Tt)&&t.datumCode!=="WGS84"}function vi(t,e,i,a){var s;Array.isArray(i)?i=Or(i):i={x:i.x,y:i.y,z:i.z,m:i.m};var r=i.z!==void 0;if(Go(i),t.datum&&e.datum&&Uo(t,e)&&(s=new Le("WGS84"),i=vi(t,s,i,a),t=s),a&&t.axis!=="enu"&&(i=ir(t,!1,i)),t.projName==="longlat")i={x:i.x*W,y:i.y*W,z:i.z||0};else if(t.to_meter&&(i={x:i.x*t.to_meter,y:i.y*t.to_meter,z:i.z||0}),i=t.inverse(i),!i)return;if(t.from_greenwich&&(i.x+=t.from_greenwich),i=Do(t.datum,e.datum,i),!!i)return i=i,e.from_greenwich&&(i={x:i.x-e.from_greenwich,y:i.y,z:i.z||0}),e.projName==="longlat"?i={x:i.x*me,y:i.y*me,z:i.z||0}:(i=e.forward(i),e.to_meter&&(i={x:i.x/e.to_meter,y:i.y/e.to_meter,z:i.z||0})),a&&e.axis!=="enu"?ir(e,!0,i):(i&&!r&&e.projName!=="geocent"&&delete i.z,i)}var rr=Le("WGS84");function Ii(t,e,i,a){var s,r,n;return Array.isArray(i)?(s=vi(t,e,i,a)||{x:NaN,y:NaN},i.length>2?typeof t.name<"u"&&t.name==="geocent"||typeof e.name<"u"&&e.name==="geocent"?typeof s.z=="number"?[s.x,s.y,s.z].concat(i.slice(3)):[s.x,s.y,i[2]].concat(i.slice(3)):[s.x,s.y].concat(i.slice(2)):[s.x,s.y]):(r=vi(t,e,i,a),n=Object.keys(i),n.length===2||n.forEach(function(o){if(typeof t.name<"u"&&t.name==="geocent"||typeof e.name<"u"&&e.name==="geocent"){if(o==="x"||o==="y"||o==="z")return}else if(o==="x"||o==="y")return;r[o]=i[o]}),r)}function si(t){return t instanceof Le?t:typeof t=="object"&&"oProj"in t?t.oProj:Le(t)}function Vo(t,e,i){var a,s,r=!1,n;return typeof e>"u"?(s=si(t),a=rr,r=!0):(typeof e.x<"u"||Array.isArray(e))&&(i=e,s=si(t),a=rr,r=!0),a||(a=si(t)),s||(s=si(e)),i?Ii(a,s,i):(n={forward:function(o,f){return Ii(a,s,o,f)},inverse:function(o,f){return Ii(s,a,o,f)}},r&&(n.oProj=s),n)}var ar=6,Dr="AJSAJS",Fr="AFAFAF",xt=65,ce=73,be=79,wt=86,It=90;const Bo={forward:Gr,inverse:zo,toPoint:Ur};function Gr(t,e){return e=e||5,Wo(ko({lat:t[1],lon:t[0]}),e)}function zo(t){var e=qi(Br(t.toUpperCase()));return e.lat&&e.lon?[e.lon,e.lat,e.lon,e.lat]:[e.left,e.bottom,e.right,e.top]}function Ur(t){var e=qi(Br(t.toUpperCase()));return e.lat&&e.lon?[e.lon,e.lat]:[(e.left+e.right)/2,(e.top+e.bottom)/2]}function bi(t){return t*(Math.PI/180)}function nr(t){return 180*(t/Math.PI)}function ko(t){var e=t.lat,i=t.lon,a=6378137,s=.00669438,r=.9996,n,o,f,l,c,u,h,m=bi(e),g=bi(i),v,_;_=Math.floor((i+180)/6)+1,i===180&&(_=60),e>=56&&e<64&&i>=3&&i<12&&(_=32),e>=72&&e<84&&(i>=0&&i<9?_=31:i>=9&&i<21?_=33:i>=21&&i<33?_=35:i>=33&&i<42&&(_=37)),n=(_-1)*6-180+3,v=bi(n),o=s/(1-s),f=a/Math.sqrt(1-s*Math.sin(m)*Math.sin(m)),l=Math.tan(m)*Math.tan(m),c=o*Math.cos(m)*Math.cos(m),u=Math.cos(m)*(g-v),h=a*((1-s/4-3*s*s/64-5*s*s*s/256)*m-(3*s/8+3*s*s/32+45*s*s*s/1024)*Math.sin(2*m)+(15*s*s/256+45*s*s*s/1024)*Math.sin(4*m)-35*s*s*s/3072*Math.sin(6*m));var S=r*f*(u+(1-l+c)*u*u*u/6+(5-18*l+l*l+72*c-58*o)*u*u*u*u*u/120)+5e5,M=r*(h+f*Math.tan(m)*(u*u/2+(5-l+9*c+4*c*c)*u*u*u*u/24+(61-58*l+l*l+600*c-330*o)*u*u*u*u*u*u/720));return e<0&&(M+=1e7),{northing:Math.round(M),easting:Math.round(S),zoneNumber:_,zoneLetter:Ho(e)}}function qi(t){var e=t.northing,i=t.easting,a=t.zoneLetter,s=t.zoneNumber;if(s<0||s>60)return null;var r=.9996,n=6378137,o=.00669438,f,l=(1-Math.sqrt(1-o))/(1+Math.sqrt(1-o)),c,u,h,m,g,v,_,S,M,A=i-5e5,L=e;a<"N"&&(L-=1e7),_=(s-1)*6-180+3,f=o/(1-o),v=L/r,S=v/(n*(1-o/4-3*o*o/64-5*o*o*o/256)),M=S+(3*l/2-27*l*l*l/32)*Math.sin(2*S)+(21*l*l/16-55*l*l*l*l/32)*Math.sin(4*S)+151*l*l*l/96*Math.sin(6*S),c=n/Math.sqrt(1-o*Math.sin(M)*Math.sin(M)),u=Math.tan(M)*Math.tan(M),h=f*Math.cos(M)*Math.cos(M),m=n*(1-o)/Math.pow(1-o*Math.sin(M)*Math.sin(M),1.5),g=A/(c*r);var b=M-c*Math.tan(M)/m*(g*g/2-(5+3*u+10*h-4*h*h-9*f)*g*g*g*g/24+(61+90*u+298*h+45*u*u-252*f-3*h*h)*g*g*g*g*g*g/720);b=nr(b);var O=(g-(1+2*u+h)*g*g*g/6+(5-2*h+28*u-3*h*h+8*f+24*u*u)*g*g*g*g*g/120)/Math.cos(M);O=_+nr(O);var k;if(t.accuracy){var re=qi({northing:t.northing+t.accuracy,easting:t.easting+t.accuracy,zoneLetter:t.zoneLetter,zoneNumber:t.zoneNumber});k={top:re.lat,right:re.lon,bottom:b,left:O}}else k={lat:b,lon:O};return k}function Ho(t){var e="Z";return 84>=t&&t>=72?e="X":72>t&&t>=64?e="W":64>t&&t>=56?e="V":56>t&&t>=48?e="U":48>t&&t>=40?e="T":40>t&&t>=32?e="S":32>t&&t>=24?e="R":24>t&&t>=16?e="Q":16>t&&t>=8?e="P":8>t&&t>=0?e="N":0>t&&t>=-8?e="M":-8>t&&t>=-16?e="L":-16>t&&t>=-24?e="K":-24>t&&t>=-32?e="J":-32>t&&t>=-40?e="H":-40>t&&t>=-48?e="G":-48>t&&t>=-56?e="F":-56>t&&t>=-64?e="E":-64>t&&t>=-72?e="D":-72>t&&t>=-80&&(e="C"),e}function Wo(t,e){var i="00000"+t.easting,a="00000"+t.northing;return t.zoneNumber+t.zoneLetter+Xo(t.easting,t.northing,t.zoneNumber)+i.substr(i.length-5,e)+a.substr(a.length-5,e)}function Xo(t,e,i){var a=Vr(i),s=Math.floor(t/1e5),r=Math.floor(e/1e5)%20;return jo(s,r,a)}function Vr(t){var e=t%ar;return e===0&&(e=ar),e}function jo(t,e,i){var a=i-1,s=Dr.charCodeAt(a),r=Fr.charCodeAt(a),n=s+t-1,o=r+e,f=!1;n>It&&(n=n-It+xt-1,f=!0),(n===ce||s<ce&&n>ce||(n>ce||s<ce)&&f)&&n++,(n===be||s<be&&n>be||(n>be||s<be)&&f)&&(n++,n===ce&&n++),n>It&&(n=n-It+xt-1),o>wt?(o=o-wt+xt-1,f=!0):f=!1,(o===ce||r<ce&&o>ce||(o>ce||r<ce)&&f)&&o++,(o===be||r<be&&o>be||(o>be||r<be)&&f)&&(o++,o===ce&&o++),o>wt&&(o=o-wt+xt-1);var l=String.fromCharCode(n)+String.fromCharCode(o);return l}function Br(t){if(t&&t.length===0)throw"MGRSPoint coverting from nothing";for(var e=t.length,i=null,a="",s,r=0;!/[A-Z]/.test(s=t.charAt(r));){if(r>=2)throw"MGRSPoint bad conversion from: "+t;a+=s,r++}var n=parseInt(a,10);if(r===0||r+3>e)throw"MGRSPoint bad conversion from: "+t;var o=t.charAt(r++);if(o<="A"||o==="B"||o==="Y"||o>="Z"||o==="I"||o==="O")throw"MGRSPoint zone letter "+o+" not handled: "+t;i=t.substring(r,r+=2);for(var f=Vr(n),l=$o(i.charAt(0),f),c=qo(i.charAt(1),f);c<Ko(o);)c+=2e6;var u=e-r;if(u%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+t;var h=u/2,m=0,g=0,v,_,S,M,A;return h>0&&(v=1e5/Math.pow(10,h),_=t.substring(r,r+h),m=parseFloat(_)*v,S=t.substring(r+h),g=parseFloat(S)*v),M=m+l,A=g+c,{easting:M,northing:A,zoneLetter:o,zoneNumber:n,accuracy:v}}function $o(t,e){for(var i=Dr.charCodeAt(e-1),a=1e5,s=!1;i!==t.charCodeAt(0);){if(i++,i===ce&&i++,i===be&&i++,i>It){if(s)throw"Bad character: "+t;i=xt,s=!0}a+=1e5}return a}function qo(t,e){if(t>"V")throw"MGRSPoint given invalid Northing "+t;for(var i=Fr.charCodeAt(e-1),a=0,s=!1;i!==t.charCodeAt(0);){if(i++,i===ce&&i++,i===be&&i++,i>wt){if(s)throw"Bad character: "+t;i=xt,s=!0}a+=1e5}return a}function Ko(t){var e;switch(t){case"C":e=11e5;break;case"D":e=2e6;break;case"E":e=28e5;break;case"F":e=37e5;break;case"G":e=46e5;break;case"H":e=55e5;break;case"J":e=64e5;break;case"K":e=73e5;break;case"L":e=82e5;break;case"M":e=91e5;break;case"N":e=0;break;case"P":e=8e5;break;case"Q":e=17e5;break;case"R":e=26e5;break;case"S":e=35e5;break;case"T":e=44e5;break;case"U":e=53e5;break;case"V":e=62e5;break;case"W":e=7e6;break;case"X":e=79e5;break;default:e=-1}if(e>=0)return e;throw"Invalid zone letter: "+t}function yt(t,e,i){if(!(this instanceof yt))return new yt(t,e,i);if(Array.isArray(t))this.x=t[0],this.y=t[1],this.z=t[2]||0;else if(typeof t=="object")this.x=t.x,this.y=t.y,this.z=t.z||0;else if(typeof t=="string"&&typeof e>"u"){var a=t.split(",");this.x=parseFloat(a[0]),this.y=parseFloat(a[1]),this.z=parseFloat(a[2])||0}else this.x=t,this.y=e,this.z=i||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}yt.fromMGRS=function(t){return new yt(Ur(t))};yt.prototype.toMGRS=function(t){return Gr([this.x,this.y],t)};var Zo=1,Yo=.25,or=.046875,fr=.01953125,lr=.01068115234375,Qo=.75,Jo=.46875,ef=.013020833333333334,tf=.007120768229166667,sf=.3645833333333333,rf=.005696614583333333,af=.3076171875;function Ki(t){var e=[];e[0]=Zo-t*(Yo+t*(or+t*(fr+t*lr))),e[1]=t*(Qo-t*(or+t*(fr+t*lr)));var i=t*t;return e[2]=i*(Jo-t*(ef+t*tf)),i*=t,e[3]=i*(sf-t*rf),e[4]=i*t*af,e}function Pt(t,e,i,a){return i*=e,e*=e,a[0]*t-i*(a[1]+e*(a[2]+e*(a[3]+e*a[4])))}var nf=20;function Zi(t,e,i){for(var a=1/(1-e),s=t,r=nf;r;--r){var n=Math.sin(s),o=1-e*n*n;if(o=(Pt(s,n,Math.cos(s),i)-t)*(o*Math.sqrt(o))*a,s-=o,Math.abs(o)<x)return s}return s}function of(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=Ki(this.es),this.ml0=Pt(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function ff(t){var e=t.x,i=t.y,a=E(e-this.long0,this.over),s,r,n,o=Math.sin(i),f=Math.cos(i);if(this.es){var c=f*a,u=Math.pow(c,2),h=this.ep2*Math.pow(f,2),m=Math.pow(h,2),g=Math.abs(f)>x?Math.tan(i):0,v=Math.pow(g,2),_=Math.pow(v,2);s=1-this.es*Math.pow(o,2),c=c/Math.sqrt(s);var S=Pt(i,o,f,this.en);r=this.a*(this.k0*c*(1+u/6*(1-v+h+u/20*(5-18*v+_+14*h-58*v*h+u/42*(61+179*_-_*v-479*v)))))+this.x0,n=this.a*(this.k0*(S-this.ml0+o*a*c/2*(1+u/12*(5-v+9*h+4*m+u/30*(61+_-58*v+270*h-330*v*h+u/56*(1385+543*_-_*v-3111*v))))))+this.y0}else{var l=f*Math.sin(a);if(Math.abs(Math.abs(l)-1)<x)return 93;if(r=.5*this.a*this.k0*Math.log((1+l)/(1-l))+this.x0,n=f*Math.cos(a)/Math.sqrt(1-Math.pow(l,2)),l=Math.abs(n),l>=1){if(l-1>x)return 93;n=0}else n=Math.acos(n);i<0&&(n=-n),n=this.a*this.k0*(n-this.lat0)+this.y0}return t.x=r,t.y=n,t}function lf(t){var e,i,a,s,r=(t.x-this.x0)*(1/this.a),n=(t.y-this.y0)*(1/this.a);if(this.es)if(e=this.ml0+n/this.k0,i=Zi(e,this.es,this.en),Math.abs(i)<p){var u=Math.sin(i),h=Math.cos(i),m=Math.abs(h)>x?Math.tan(i):0,g=this.ep2*Math.pow(h,2),v=Math.pow(g,2),_=Math.pow(m,2),S=Math.pow(_,2);e=1-this.es*Math.pow(u,2);var M=r*Math.sqrt(e)/this.k0,A=Math.pow(M,2);e=e*m,a=i-e*A/(1-this.es)*.5*(1-A/12*(5+3*_-9*g*_+g-4*v-A/30*(61+90*_-252*g*_+45*S+46*g-A/56*(1385+3633*_+4095*S+1574*S*_)))),s=E(this.long0+M*(1-A/6*(1+2*_+g-A/20*(5+28*_+24*S+8*g*_+6*g-A/42*(61+662*_+1320*S+720*S*_))))/h,this.over)}else a=p*Zt(n),s=0;else{var o=Math.exp(r/this.k0),f=.5*(o-1/o),l=this.lat0+n/this.k0,c=Math.cos(l);e=Math.sqrt((1-Math.pow(c,2))/(1+Math.pow(f,2))),a=Math.asin(e),n<0&&(a=-a),f===0&&c===0?s=0:s=E(Math.atan2(f,c)+this.long0,this.over)}return t.x=s,t.y=a,t}var hf=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const fi={init:of,forward:ff,inverse:lf,names:hf};function zr(t){var e=Math.exp(t);return e=(e-1/e)/2,e}function de(t,e){t=Math.abs(t),e=Math.abs(e);var i=Math.max(t,e),a=Math.min(t,e)/(i||1);return i*Math.sqrt(1+Math.pow(a,2))}function uf(t){var e=1+t,i=e-1;return i===0?t:t*Math.log(e)/i}function cf(t){var e=Math.abs(t);return e=uf(e*(1+e/(de(1,e)+1))),t<0?-e:e}function Yi(t,e){for(var i=2*Math.cos(2*e),a=t.length-1,s=t[a],r=0,n;--a>=0;)n=-r+i*s+t[a],r=s,s=n;return e+n*Math.sin(2*e)}function df(t,e){for(var i=2*Math.cos(e),a=t.length-1,s=t[a],r=0,n;--a>=0;)n=-r+i*s+t[a],r=s,s=n;return Math.sin(e)*n}function mf(t){var e=Math.exp(t);return e=(e+1/e)/2,e}function kr(t,e,i){for(var a=Math.sin(e),s=Math.cos(e),r=zr(i),n=mf(i),o=2*s*n,f=-2*a*r,l=t.length-1,c=t[l],u=0,h=0,m=0,g,v;--l>=0;)g=h,v=u,h=c,u=m,c=-g+o*h-f*u+t[l],m=-v+f*h+o*u;return o=a*n,f=s*r,[o*c-f*m,o*m+f*c]}function gf(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(fi.init.apply(this),this.forward=fi.forward,this.inverse=fi.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var t=this.es/(1+Math.sqrt(1-this.es)),e=t/(2-t),i=e;this.cgb[0]=e*(2+e*(-2/3+e*(-2+e*(116/45+e*(26/45+e*(-2854/675)))))),this.cbg[0]=e*(-2+e*(2/3+e*(4/3+e*(-82/45+e*(32/45+e*(4642/4725)))))),i=i*e,this.cgb[1]=i*(7/3+e*(-8/5+e*(-227/45+e*(2704/315+e*(2323/945))))),this.cbg[1]=i*(5/3+e*(-16/15+e*(-13/9+e*(904/315+e*(-1522/945))))),i=i*e,this.cgb[2]=i*(56/15+e*(-136/35+e*(-1262/105+e*(73814/2835)))),this.cbg[2]=i*(-26/15+e*(34/21+e*(8/5+e*(-12686/2835)))),i=i*e,this.cgb[3]=i*(4279/630+e*(-332/35+e*(-399572/14175))),this.cbg[3]=i*(1237/630+e*(-12/5+e*(-24832/14175))),i=i*e,this.cgb[4]=i*(4174/315+e*(-144838/6237)),this.cbg[4]=i*(-734/315+e*(109598/31185)),i=i*e,this.cgb[5]=i*(601676/22275),this.cbg[5]=i*(444337/155925),i=Math.pow(e,2),this.Qn=this.k0/(1+e)*(1+i*(1/4+i*(1/64+i/256))),this.utg[0]=e*(-.5+e*(2/3+e*(-37/96+e*(1/360+e*(81/512+e*(-96199/604800)))))),this.gtu[0]=e*(.5+e*(-2/3+e*(5/16+e*(41/180+e*(-127/288+e*(7891/37800)))))),this.utg[1]=i*(-1/48+e*(-1/15+e*(437/1440+e*(-46/105+e*(1118711/3870720))))),this.gtu[1]=i*(13/48+e*(-3/5+e*(557/1440+e*(281/630+e*(-1983433/1935360))))),i=i*e,this.utg[2]=i*(-17/480+e*(37/840+e*(209/4480+e*(-5569/90720)))),this.gtu[2]=i*(61/240+e*(-103/140+e*(15061/26880+e*(167603/181440)))),i=i*e,this.utg[3]=i*(-4397/161280+e*(11/504+e*(830251/7257600))),this.gtu[3]=i*(49561/161280+e*(-179/168+e*(6601661/7257600))),i=i*e,this.utg[4]=i*(-4583/161280+e*(108847/3991680)),this.gtu[4]=i*(34729/80640+e*(-3418889/1995840)),i=i*e,this.utg[5]=i*(-20648693/638668800),this.gtu[5]=i*(212378941/319334400);var a=Yi(this.cbg,this.lat0);this.Zb=-this.Qn*(a+df(this.gtu,2*a))}function vf(t){var e=E(t.x-this.long0,this.over),i=t.y;i=Yi(this.cbg,i);var a=Math.sin(i),s=Math.cos(i),r=Math.sin(e),n=Math.cos(e);i=Math.atan2(a,n*s),e=Math.atan2(r*s,de(a,s*n)),e=cf(Math.tan(e));var o=kr(this.gtu,2*i,2*e);i=i+o[0],e=e+o[1];var f,l;return Math.abs(e)<=2.623395162778?(f=this.a*(this.Qn*e)+this.x0,l=this.a*(this.Qn*i+this.Zb)+this.y0):(f=1/0,l=1/0),t.x=f,t.y=l,t}function _f(t){var e=(t.x-this.x0)*(1/this.a),i=(t.y-this.y0)*(1/this.a);i=(i-this.Zb)/this.Qn,e=e/this.Qn;var a,s;if(Math.abs(e)<=2.623395162778){var r=kr(this.utg,2*i,2*e);i=i+r[0],e=e+r[1],e=Math.atan(zr(e));var n=Math.sin(i),o=Math.cos(i),f=Math.sin(e),l=Math.cos(e);i=Math.atan2(n*l,de(f,l*o)),e=Math.atan2(f,l*o),a=E(e+this.long0,this.over),s=Yi(this.cgb,i)}else a=1/0,s=1/0;return t.x=a,t.y=s,t}var pf=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","Gauss Kruger","Gauss_Kruger","tmerc"];const li={init:gf,forward:vf,inverse:_f,names:pf};function xf(t,e){if(t===void 0){if(t=Math.floor((E(e)+Math.PI)*30/Math.PI)+1,t<0)return 0;if(t>60)return 60}return t}var Sf="etmerc";function Ef(){var t=xf(this.zone,this.long0);if(t===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(t)-183)*W,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,li.init.apply(this),this.forward=li.forward,this.inverse=li.inverse}var Tf=["Universal Transverse Mercator System","utm"];const Mf={init:Ef,names:Tf,dependsOn:Sf};function Qi(t,e){return Math.pow((1-t)/(1+t),e)}var yf=20;function Pf(){var t=Math.sin(this.lat0),e=Math.cos(this.lat0);e*=e,this.rc=Math.sqrt(1-this.es)/(1-this.es*t*t),this.C=Math.sqrt(1+this.es*e*e/(1-this.es)),this.phic0=Math.asin(t/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+D)/(Math.pow(Math.tan(.5*this.lat0+D),this.C)*Qi(this.e*t,this.ratexp))}function Cf(t){var e=t.x,i=t.y;return t.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*i+D),this.C)*Qi(this.e*Math.sin(i),this.ratexp))-p,t.x=this.C*e,t}function Af(t){for(var e=1e-14,i=t.x/this.C,a=t.y,s=Math.pow(Math.tan(.5*a+D)/this.K,1/this.C),r=yf;r>0&&(a=2*Math.atan(s*Qi(this.e*Math.sin(t.y),-.5*this.e))-p,!(Math.abs(a-t.y)<e));--r)t.y=a;return r?(t.x=i,t.y=a,t):null}const Ji={init:Pf,forward:Cf,inverse:Af};function Nf(){Ji.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function wf(t){var e,i,a,s;return t.x=E(t.x-this.long0,this.over),Ji.forward.apply(this,[t]),e=Math.sin(t.y),i=Math.cos(t.y),a=Math.cos(t.x),s=this.k0*this.R2/(1+this.sinc0*e+this.cosc0*i*a),t.x=s*i*Math.sin(t.x),t.y=s*(this.cosc0*e-this.sinc0*i*a),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function If(t){var e,i,a,s,r;if(t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,t.x/=this.k0,t.y/=this.k0,r=de(t.x,t.y)){var n=2*Math.atan2(r,this.R2);e=Math.sin(n),i=Math.cos(n),s=Math.asin(i*this.sinc0+t.y*e*this.cosc0/r),a=Math.atan2(t.x*e,r*this.cosc0*i-t.y*this.sinc0*e)}else s=this.phic0,a=0;return t.x=a,t.y=s,Ji.inverse.apply(this,[t]),t.x=E(t.x+this.long0,this.over),t}var bf=["Stereographic_North_Pole","Oblique_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const Lf={init:Nf,forward:wf,inverse:If,names:bf};function es(t,e,i){return e*=i,Math.tan(.5*(p+t))*Math.pow((1-e)/(1+e),.5*i)}function Rf(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=x&&(this.k0=.5*(1+Zt(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=x&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=x&&Math.abs(Math.cos(this.lat_ts))>x&&(this.k0=.5*this.cons*We(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/Fe(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=We(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(es(this.lat0,this.sinlat0,this.e))-p,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function Of(t){var e=t.x,i=t.y,a=Math.sin(i),s=Math.cos(i),r,n,o,f,l,c,u=E(e-this.long0,this.over);return Math.abs(Math.abs(e-this.long0)-Math.PI)<=x&&Math.abs(i+this.lat0)<=x?(t.x=NaN,t.y=NaN,t):this.sphere?(r=2*this.k0/(1+this.sinlat0*a+this.coslat0*s*Math.cos(u)),t.x=this.a*r*s*Math.sin(u)+this.x0,t.y=this.a*r*(this.coslat0*a-this.sinlat0*s*Math.cos(u))+this.y0,t):(n=2*Math.atan(es(i,a,this.e))-p,f=Math.cos(n),o=Math.sin(n),Math.abs(this.coslat0)<=x?(l=Fe(this.e,i*this.con,this.con*a),c=2*this.a*this.k0*l/this.cons,t.x=this.x0+c*Math.sin(e-this.long0),t.y=this.y0-this.con*c*Math.cos(e-this.long0),t):(Math.abs(this.sinlat0)<x?(r=2*this.a*this.k0/(1+f*Math.cos(u)),t.y=r*o):(r=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*o+this.cosX0*f*Math.cos(u))),t.y=r*(this.cosX0*o-this.sinX0*f*Math.cos(u))+this.y0),t.x=r*f*Math.sin(u)+this.x0,t))}function Df(t){t.x-=this.x0,t.y-=this.y0;var e,i,a,s,r,n=Math.sqrt(t.x*t.x+t.y*t.y);if(this.sphere){var o=2*Math.atan(n/(2*this.a*this.k0));return e=this.long0,i=this.lat0,n<=x?(t.x=e,t.y=i,t):(i=Math.asin(Math.cos(o)*this.sinlat0+t.y*Math.sin(o)*this.coslat0/n),Math.abs(this.coslat0)<x?this.lat0>0?e=E(this.long0+Math.atan2(t.x,-1*t.y),this.over):e=E(this.long0+Math.atan2(t.x,t.y),this.over):e=E(this.long0+Math.atan2(t.x*Math.sin(o),n*this.coslat0*Math.cos(o)-t.y*this.sinlat0*Math.sin(o)),this.over),t.x=e,t.y=i,t)}else if(Math.abs(this.coslat0)<=x){if(n<=x)return i=this.lat0,e=this.long0,t.x=e,t.y=i,t;t.x*=this.con,t.y*=this.con,a=n*this.cons/(2*this.a*this.k0),i=this.con*jt(this.e,a),e=this.con*E(this.con*this.long0+Math.atan2(t.x,-1*t.y),this.over)}else s=2*Math.atan(n*this.cosX0/(2*this.a*this.k0*this.ms1)),e=this.long0,n<=x?r=this.X0:(r=Math.asin(Math.cos(s)*this.sinX0+t.y*Math.sin(s)*this.cosX0/n),e=E(this.long0+Math.atan2(t.x*Math.sin(s),n*this.cosX0*Math.cos(s)-t.y*this.sinX0*Math.sin(s)),this.over)),i=-1*jt(this.e,Math.tan(.5*(p+r)));return t.x=e,t.y=i,t}var Ff=["stere","Stereographic_South_Pole","Polar_Stereographic_variant_A","Polar_Stereographic_variant_B","Polar_Stereographic"];const Gf={init:Rf,forward:Of,inverse:Df,names:Ff,ssfn_:es};function Uf(){var t=this.lat0;this.lambda0=this.long0;var e=Math.sin(t),i=this.a,a=this.rf,s=1/a,r=2*s-Math.pow(s,2),n=this.e=Math.sqrt(r);this.R=this.k0*i*Math.sqrt(1-r)/(1-r*Math.pow(e,2)),this.alpha=Math.sqrt(1+r/(1-r)*Math.pow(Math.cos(t),4)),this.b0=Math.asin(e/this.alpha);var o=Math.log(Math.tan(Math.PI/4+this.b0/2)),f=Math.log(Math.tan(Math.PI/4+t/2)),l=Math.log((1+n*e)/(1-n*e));this.K=o-this.alpha*f+this.alpha*n/2*l}function Vf(t){var e=Math.log(Math.tan(Math.PI/4-t.y/2)),i=this.e/2*Math.log((1+this.e*Math.sin(t.y))/(1-this.e*Math.sin(t.y))),a=-this.alpha*(e+i)+this.K,s=2*(Math.atan(Math.exp(a))-Math.PI/4),r=this.alpha*(t.x-this.lambda0),n=Math.atan(Math.sin(r)/(Math.sin(this.b0)*Math.tan(s)+Math.cos(this.b0)*Math.cos(r))),o=Math.asin(Math.cos(this.b0)*Math.sin(s)-Math.sin(this.b0)*Math.cos(s)*Math.cos(r));return t.y=this.R/2*Math.log((1+Math.sin(o))/(1-Math.sin(o)))+this.y0,t.x=this.R*n+this.x0,t}function Bf(t){for(var e=t.x-this.x0,i=t.y-this.y0,a=e/this.R,s=2*(Math.atan(Math.exp(i/this.R))-Math.PI/4),r=Math.asin(Math.cos(this.b0)*Math.sin(s)+Math.sin(this.b0)*Math.cos(s)*Math.cos(a)),n=Math.atan(Math.sin(a)/(Math.cos(this.b0)*Math.cos(a)-Math.sin(this.b0)*Math.tan(s))),o=this.lambda0+n/this.alpha,f=0,l=r,c=-1e3,u=0;Math.abs(l-c)>1e-7;){if(++u>20)return;f=1/this.alpha*(Math.log(Math.tan(Math.PI/4+r/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(l))/2)),c=l,l=2*Math.atan(Math.exp(f))-Math.PI/2}return t.x=o,t.y=l,t}var zf=["somerc"];const kf={init:Uf,forward:Vf,inverse:Bf,names:zf};var vt=1e-7;function Hf(t){var e=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_variant_A","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],i=typeof t.projName=="object"?Object.keys(t.projName)[0]:t.projName;return"no_uoff"in t||"no_off"in t||e.indexOf(i)!==-1||e.indexOf(Ir(i))!==-1}function Wf(){var t,e,i,a,s,r,n,o,f,l,c=0,u,h=0,m=0,g=0,v=0,_=0,S=0;this.no_off=Hf(this),this.no_rot="no_rot"in this;var M=!1;"alpha"in this&&(M=!0);var A=!1;if("rectified_grid_angle"in this&&(A=!0),M&&(S=this.alpha),A&&(c=this.rectified_grid_angle),M||A)h=this.longc;else if(m=this.long1,v=this.lat1,g=this.long2,_=this.lat2,Math.abs(v-_)<=vt||(t=Math.abs(v))<=vt||Math.abs(t-p)<=vt||Math.abs(Math.abs(this.lat0)-p)<=vt||Math.abs(Math.abs(_)-p)<=vt)throw new Error;var L=1-this.es;e=Math.sqrt(L),Math.abs(this.lat0)>x?(o=Math.sin(this.lat0),i=Math.cos(this.lat0),t=1-this.es*o*o,this.B=i*i,this.B=Math.sqrt(1+this.es*this.B*this.B/L),this.A=this.B*this.k0*e/t,a=this.B*e/(i*Math.sqrt(t)),s=a*a-1,s<=0?s=0:(s=Math.sqrt(s),this.lat0<0&&(s=-s)),this.E=s+=a,this.E*=Math.pow(Fe(this.e,this.lat0,o),this.B)):(this.B=1/e,this.A=this.k0,this.E=a=s=1),M||A?(M?(u=Math.asin(Math.sin(S)/a),A||(c=S)):(u=c,S=Math.asin(a*Math.sin(u))),this.lam0=h-Math.asin(.5*(s-1/s)*Math.tan(u))/this.B):(r=Math.pow(Fe(this.e,v,Math.sin(v)),this.B),n=Math.pow(Fe(this.e,_,Math.sin(_)),this.B),s=this.E/r,f=(n-r)/(n+r),l=this.E*this.E,l=(l-n*r)/(l+n*r),t=m-g,t<-Math.PI?g-=Wt:t>Math.PI&&(g+=Wt),this.lam0=E(.5*(m+g)-Math.atan(l*Math.tan(.5*this.B*(m-g))/f)/this.B,this.over),u=Math.atan(2*Math.sin(this.B*E(m-this.lam0,this.over))/(s-1/s)),c=S=Math.asin(a*Math.sin(u))),this.singam=Math.sin(u),this.cosgam=Math.cos(u),this.sinrot=Math.sin(c),this.cosrot=Math.cos(c),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(a*a-1)/Math.cos(S))),this.lat0<0&&(this.u_0=-this.u_0)),s=.5*u,this.v_pole_n=this.ArB*Math.log(Math.tan(D-s)),this.v_pole_s=this.ArB*Math.log(Math.tan(D+s))}function Xf(t){var e={},i,a,s,r,n,o,f,l;if(t.x=t.x-this.lam0,Math.abs(Math.abs(t.y)-p)>x){if(n=this.E/Math.pow(Fe(this.e,t.y,Math.sin(t.y)),this.B),o=1/n,i=.5*(n-o),a=.5*(n+o),r=Math.sin(this.B*t.x),s=(i*this.singam-r*this.cosgam)/a,Math.abs(Math.abs(s)-1)<x)throw new Error;l=.5*this.ArB*Math.log((1-s)/(1+s)),o=Math.cos(this.B*t.x),Math.abs(o)<vt?f=this.A*t.x:f=this.ArB*Math.atan2(i*this.cosgam+r*this.singam,o)}else l=t.y>0?this.v_pole_n:this.v_pole_s,f=this.ArB*t.y;return this.no_rot?(e.x=f,e.y=l):(f-=this.u_0,e.x=l*this.cosrot+f*this.sinrot,e.y=f*this.cosrot-l*this.sinrot),e.x=this.a*e.x+this.x0,e.y=this.a*e.y+this.y0,e}function jf(t){var e,i,a,s,r,n,o,f={};if(t.x=(t.x-this.x0)*(1/this.a),t.y=(t.y-this.y0)*(1/this.a),this.no_rot?(i=t.y,e=t.x):(i=t.x*this.cosrot-t.y*this.sinrot,e=t.y*this.cosrot+t.x*this.sinrot+this.u_0),a=Math.exp(-this.BrA*i),s=.5*(a-1/a),r=.5*(a+1/a),n=Math.sin(this.BrA*e),o=(n*this.cosgam+s*this.singam)/r,Math.abs(Math.abs(o)-1)<x)f.x=0,f.y=o<0?-p:p;else{if(f.y=this.E/Math.sqrt((1+o)/(1-o)),f.y=jt(this.e,Math.pow(f.y,1/this.B)),f.y===1/0)throw new Error;f.x=-this.rB*Math.atan2(s*this.cosgam-n*this.singam,Math.cos(this.BrA*e))}return f.x+=this.lam0,f}var $f=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_variant_A","Hotine_Oblique_Mercator_Variant_B","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const qf={init:Wf,forward:Xf,inverse:jf,names:$f};function Kf(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<x)){var t=this.b/this.a;this.e=Math.sqrt(1-t*t);var e=Math.sin(this.lat1),i=Math.cos(this.lat1),a=We(this.e,e,i),s=Fe(this.e,this.lat1,e),r=Math.sin(this.lat2),n=Math.cos(this.lat2),o=We(this.e,r,n),f=Fe(this.e,this.lat2,r),l=Math.abs(Math.abs(this.lat0)-p)<x?0:Fe(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>x?this.ns=Math.log(a/o)/Math.log(s/f):this.ns=e,isNaN(this.ns)&&(this.ns=e),this.f0=a/(this.ns*Math.pow(s,this.ns)),this.rh=this.a*this.f0*Math.pow(l,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function Zf(t){var e=t.x,i=t.y;Math.abs(2*Math.abs(i)-Math.PI)<=x&&(i=Zt(i)*(p-2*x));var a=Math.abs(Math.abs(i)-p),s,r;if(a>x)s=Fe(this.e,i,Math.sin(i)),r=this.a*this.f0*Math.pow(s,this.ns);else{if(a=i*this.ns,a<=0)return null;r=0}var n=this.ns*E(e-this.long0,this.over);return t.x=this.k0*(r*Math.sin(n))+this.x0,t.y=this.k0*(this.rh-r*Math.cos(n))+this.y0,t}function Yf(t){var e,i,a,s,r,n=(t.x-this.x0)/this.k0,o=this.rh-(t.y-this.y0)/this.k0;this.ns>0?(e=Math.sqrt(n*n+o*o),i=1):(e=-Math.sqrt(n*n+o*o),i=-1);var f=0;if(e!==0&&(f=Math.atan2(i*n,i*o)),e!==0||this.ns>0){if(i=1/this.ns,a=Math.pow(e/(this.a*this.f0),i),s=jt(this.e,a),s===-9999)return null}else s=-p;return r=E(f/this.ns+this.long0,this.over),t.x=r,t.y=s,t}var Qf=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const Jf={init:Kf,forward:Zf,inverse:Yf,names:Qf};function el(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function tl(t){var e,i,a,s,r,n,o,f=t.x,l=t.y,c=E(f-this.long0,this.over);return e=Math.pow((1+this.e*Math.sin(l))/(1-this.e*Math.sin(l)),this.alfa*this.e/2),i=2*(Math.atan(this.k*Math.pow(Math.tan(l/2+this.s45),this.alfa)/e)-this.s45),a=-c*this.alfa,s=Math.asin(Math.cos(this.ad)*Math.sin(i)+Math.sin(this.ad)*Math.cos(i)*Math.cos(a)),r=Math.asin(Math.cos(i)*Math.sin(a)/Math.cos(s)),n=this.n*r,o=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(s/2+this.s45),this.n),t.y=o*Math.cos(n)/1,t.x=o*Math.sin(n)/1,this.czech||(t.y*=-1,t.x*=-1),t}function il(t){var e,i,a,s,r,n,o,f,l=t.x;t.x=t.y,t.y=l,this.czech||(t.y*=-1,t.x*=-1),n=Math.sqrt(t.x*t.x+t.y*t.y),r=Math.atan2(t.y,t.x),s=r/Math.sin(this.s0),a=2*(Math.atan(Math.pow(this.ro0/n,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),e=Math.asin(Math.cos(this.ad)*Math.sin(a)-Math.sin(this.ad)*Math.cos(a)*Math.cos(s)),i=Math.asin(Math.cos(a)*Math.sin(s)/Math.cos(e)),t.x=this.long0-i/this.alfa,o=e,f=0;var c=0;do t.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(e/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(o))/(1-this.e*Math.sin(o)),this.e/2))-this.s45),Math.abs(o-t.y)<1e-10&&(f=1),o=t.y,c+=1;while(f===0&&c<15);return c>=15?null:t}var sl=["Krovak","Krovak Modified","Krovak (North Orientated)","Krovak Modified (North Orientated)","krovak"];const rl={init:el,forward:tl,inverse:il,names:sl};function le(t,e,i,a,s){return t*s-e*Math.sin(2*s)+i*Math.sin(4*s)-a*Math.sin(6*s)}function Yt(t){return 1-.25*t*(1+t/16*(3+1.25*t))}function Qt(t){return .375*t*(1+.25*t*(1+.46875*t))}function Jt(t){return .05859375*t*t*(1+.75*t)}function ei(t){return t*t*t*(35/3072)}function ts(t,e,i){var a=e*i;return t/Math.sqrt(1-a*a)}function tt(t){return Math.abs(t)<p?t:t-Zt(t)*Math.PI}function _i(t,e,i,a,s){var r,n;r=t/e;for(var o=0;o<15;o++)if(n=(t-(e*r-i*Math.sin(2*r)+a*Math.sin(4*r)-s*Math.sin(6*r)))/(e-2*i*Math.cos(2*r)+4*a*Math.cos(4*r)-6*s*Math.cos(6*r)),r+=n,Math.abs(n)<=1e-10)return r;return NaN}function al(){this.sphere||(this.e0=Yt(this.es),this.e1=Qt(this.es),this.e2=Jt(this.es),this.e3=ei(this.es),this.ml0=this.a*le(this.e0,this.e1,this.e2,this.e3,this.lat0))}function nl(t){var e,i,a=t.x,s=t.y;if(a=E(a-this.long0,this.over),this.sphere)e=this.a*Math.asin(Math.cos(s)*Math.sin(a)),i=this.a*(Math.atan2(Math.tan(s),Math.cos(a))-this.lat0);else{var r=Math.sin(s),n=Math.cos(s),o=ts(this.a,this.e,r),f=Math.tan(s)*Math.tan(s),l=a*Math.cos(s),c=l*l,u=this.es*n*n/(1-this.es),h=this.a*le(this.e0,this.e1,this.e2,this.e3,s);e=o*l*(1-c*f*(1/6-(8-f+8*u)*c/120)),i=h-this.ml0+o*r/n*c*(.5+(5-f+6*u)*c/24)}return t.x=e+this.x0,t.y=i+this.y0,t}function ol(t){t.x-=this.x0,t.y-=this.y0;var e=t.x/this.a,i=t.y/this.a,a,s;if(this.sphere){var r=i+this.lat0;a=Math.asin(Math.sin(r)*Math.cos(e)),s=Math.atan2(Math.tan(e),Math.cos(r))}else{var n=this.ml0/this.a+i,o=_i(n,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(o)-p)<=x)return t.x=this.long0,t.y=p,i<0&&(t.y*=-1),t;var f=ts(this.a,this.e,Math.sin(o)),l=f*f*f/this.a/this.a*(1-this.es),c=Math.pow(Math.tan(o),2),u=e*this.a/f,h=u*u;a=o-f*Math.tan(o)/l*u*u*(.5-(1+3*c)*u*u/24),s=u*(1-h*(c/3+(1+3*c)*c*h/15))/Math.cos(o)}return t.x=E(s+this.long0,this.over),t.y=tt(a),t}var fl=["Cassini","Cassini_Soldner","cass"];const ll={init:al,forward:nl,inverse:ol,names:fl};function Qe(t,e){var i;return t>1e-7?(i=t*e,(1-t*t)*(e/(1-i*i)-.5/t*Math.log((1-i)/(1+i)))):2*e}var Bi=1,zi=2,ki=3,hi=4;function hl(){var t=Math.abs(this.lat0);if(Math.abs(t-p)<x?this.mode=this.lat0<0?Bi:zi:Math.abs(t)<x?this.mode=ki:this.mode=hi,this.es>0){var e;switch(this.qp=Qe(this.e,1),this.mmf=.5/(1-this.es),this.apa=xl(this.es),this.mode){case zi:this.dd=1;break;case Bi:this.dd=1;break;case ki:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case hi:this.rq=Math.sqrt(.5*this.qp),e=Math.sin(this.lat0),this.sinb1=Qe(this.e,e)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*e*e)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===hi&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function ul(t){var e,i,a,s,r,n,o,f,l,c,u=t.x,h=t.y;if(u=E(u-this.long0,this.over),this.sphere){if(r=Math.sin(h),c=Math.cos(h),a=Math.cos(u),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(i=this.mode===this.EQUIT?1+c*a:1+this.sinph0*r+this.cosph0*c*a,i<=x)return null;i=Math.sqrt(2/i),e=i*c*Math.sin(u),i*=this.mode===this.EQUIT?r:this.cosph0*r-this.sinph0*c*a}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(a=-a),Math.abs(h+this.lat0)<x)return null;i=D-h*.5,i=2*(this.mode===this.S_POLE?Math.cos(i):Math.sin(i)),e=i*Math.sin(u),i*=a}}else{switch(o=0,f=0,l=0,a=Math.cos(u),s=Math.sin(u),r=Math.sin(h),n=Qe(this.e,r),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(o=n/this.qp,f=Math.sqrt(1-o*o)),this.mode){case this.OBLIQ:l=1+this.sinb1*o+this.cosb1*f*a;break;case this.EQUIT:l=1+f*a;break;case this.N_POLE:l=p+h,n=this.qp-n;break;case this.S_POLE:l=h-p,n=this.qp+n;break}if(Math.abs(l)<x)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:l=Math.sqrt(2/l),this.mode===this.OBLIQ?i=this.ymf*l*(this.cosb1*o-this.sinb1*f*a):i=(l=Math.sqrt(2/(1+f*a)))*o*this.ymf,e=this.xmf*l*f*s;break;case this.N_POLE:case this.S_POLE:n>=0?(e=(l=Math.sqrt(n))*s,i=a*(this.mode===this.S_POLE?l:-l)):e=i=0;break}}return t.x=this.a*e+this.x0,t.y=this.a*i+this.y0,t}function cl(t){t.x-=this.x0,t.y-=this.y0;var e=t.x/this.a,i=t.y/this.a,a,s,r,n,o,f,l;if(this.sphere){var c=0,u,h=0;if(u=Math.sqrt(e*e+i*i),s=u*.5,s>1)return null;switch(s=2*Math.asin(s),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(h=Math.sin(s),c=Math.cos(s)),this.mode){case this.EQUIT:s=Math.abs(u)<=x?0:Math.asin(i*h/u),e*=h,i=c*u;break;case this.OBLIQ:s=Math.abs(u)<=x?this.lat0:Math.asin(c*this.sinph0+i*h*this.cosph0/u),e*=h*this.cosph0,i=(c-Math.sin(s)*this.sinph0)*u;break;case this.N_POLE:i=-i,s=p-s;break;case this.S_POLE:s-=p;break}a=i===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(e,i)}else{if(l=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e/=this.dd,i*=this.dd,f=Math.sqrt(e*e+i*i),f<x)return t.x=this.long0,t.y=this.lat0,t;n=2*Math.asin(.5*f/this.rq),r=Math.cos(n),e*=n=Math.sin(n),this.mode===this.OBLIQ?(l=r*this.sinb1+i*n*this.cosb1/f,o=this.qp*l,i=f*this.cosb1*r-i*this.sinb1*n):(l=i*n/f,o=this.qp*l,i=f*r)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(i=-i),o=e*e+i*i,!o)return t.x=this.long0,t.y=this.lat0,t;l=1-o/this.qp,this.mode===this.S_POLE&&(l=-l)}a=Math.atan2(e,i),s=Sl(Math.asin(l),this.apa)}return t.x=E(this.long0+a,this.over),t.y=s,t}var dl=.3333333333333333,ml=.17222222222222222,gl=.10257936507936508,vl=.06388888888888888,_l=.0664021164021164,pl=.016415012942191543;function xl(t){var e,i=[];return i[0]=t*dl,e=t*t,i[0]+=e*ml,i[1]=e*vl,e*=t,i[0]+=e*gl,i[1]+=e*_l,i[2]=e*pl,i}function Sl(t,e){var i=t+t;return t+e[0]*Math.sin(i)+e[1]*Math.sin(i+i)+e[2]*Math.sin(i+i+i)}var El=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const Tl={init:hl,forward:ul,inverse:cl,names:El,S_POLE:Bi,N_POLE:zi,EQUIT:ki,OBLIQ:hi};function et(t){return Math.abs(t)>1&&(t=t>1?1:-1),Math.asin(t)}function Ml(){Math.abs(this.lat1+this.lat2)<x||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=We(this.e3,this.sin_po,this.cos_po),this.qs1=Qe(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=We(this.e3,this.sin_po,this.cos_po),this.qs2=Qe(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=Qe(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>x?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function yl(t){var e=t.x,i=t.y;this.sin_phi=Math.sin(i),this.cos_phi=Math.cos(i);var a=Qe(this.e3,this.sin_phi),s=this.a*Math.sqrt(this.c-this.ns0*a)/this.ns0,r=this.ns0*E(e-this.long0,this.over),n=s*Math.sin(r)+this.x0,o=this.rh-s*Math.cos(r)+this.y0;return t.x=n,t.y=o,t}function Pl(t){var e,i,a,s,r,n;return t.x-=this.x0,t.y=this.rh-t.y+this.y0,this.ns0>=0?(e=Math.sqrt(t.x*t.x+t.y*t.y),a=1):(e=-Math.sqrt(t.x*t.x+t.y*t.y),a=-1),s=0,e!==0&&(s=Math.atan2(a*t.x,a*t.y)),a=e*this.ns0/this.a,this.sphere?n=Math.asin((this.c-a*a)/(2*this.ns0)):(i=(this.c-a*a)/this.ns0,n=this.phi1z(this.e3,i)),r=E(s/this.ns0+this.long0,this.over),t.x=r,t.y=n,t}function Cl(t,e){var i,a,s,r,n,o=et(.5*e);if(t<x)return o;for(var f=t*t,l=1;l<=25;l++)if(i=Math.sin(o),a=Math.cos(o),s=t*i,r=1-s*s,n=.5*r*r/a*(e/(1-f)-i/r+.5/t*Math.log((1-s)/(1+s))),o=o+n,Math.abs(n)<=1e-7)return o;return null}var Al=["Albers_Conic_Equal_Area","Albers_Equal_Area","Albers","aea"];const Nl={init:Ml,forward:yl,inverse:Pl,names:Al,phi1z:Cl};function wl(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function Il(t){var e,i,a,s,r,n,o,f,l=t.x,c=t.y;return a=E(l-this.long0,this.over),e=Math.sin(c),i=Math.cos(c),s=Math.cos(a),n=this.sin_p14*e+this.cos_p14*i*s,r=1,n>0||Math.abs(n)<=x?(o=this.x0+this.a*r*i*Math.sin(a)/n,f=this.y0+this.a*r*(this.cos_p14*e-this.sin_p14*i*s)/n):(o=this.x0+this.infinity_dist*i*Math.sin(a),f=this.y0+this.infinity_dist*(this.cos_p14*e-this.sin_p14*i*s)),t.x=o,t.y=f,t}function bl(t){var e,i,a,s,r,n;return t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,t.x/=this.k0,t.y/=this.k0,(e=Math.sqrt(t.x*t.x+t.y*t.y))?(s=Math.atan2(e,this.rc),i=Math.sin(s),a=Math.cos(s),n=et(a*this.sin_p14+t.y*i*this.cos_p14/e),r=Math.atan2(t.x*i,e*this.cos_p14*a-t.y*this.sin_p14*i),r=E(this.long0+r,this.over)):(n=this.phic0,r=0),t.x=r,t.y=n,t}var Ll=["gnom"];const Rl={init:wl,forward:Il,inverse:bl,names:Ll};function Ol(t,e){var i=1-(1-t*t)/(2*t)*Math.log((1-t)/(1+t));if(Math.abs(Math.abs(e)-i)<1e-6)return e<0?-1*p:p;for(var a=Math.asin(.5*e),s,r,n,o,f=0;f<30;f++)if(r=Math.sin(a),n=Math.cos(a),o=t*r,s=Math.pow(1-o*o,2)/(2*n)*(e/(1-t*t)-r/(1-o*o)+.5/t*Math.log((1-o)/(1+o))),a+=s,Math.abs(s)<=1e-10)return a;return NaN}function Dl(){this.sphere||(this.k0=We(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function Fl(t){var e=t.x,i=t.y,a,s,r=E(e-this.long0,this.over);if(this.sphere)a=this.x0+this.a*r*Math.cos(this.lat_ts),s=this.y0+this.a*Math.sin(i)/Math.cos(this.lat_ts);else{var n=Qe(this.e,Math.sin(i));a=this.x0+this.a*this.k0*r,s=this.y0+this.a*n*.5/this.k0}return t.x=a,t.y=s,t}function Gl(t){t.x-=this.x0,t.y-=this.y0;var e,i;return this.sphere?(e=E(this.long0+t.x/this.a/Math.cos(this.lat_ts),this.over),i=Math.asin(t.y/this.a*Math.cos(this.lat_ts))):(i=Ol(this.e,2*t.y*this.k0/this.a),e=E(this.long0+t.x/(this.a*this.k0),this.over)),t.x=e,t.y=i,t}var Ul=["cea"];const Vl={init:Dl,forward:Fl,inverse:Gl,names:Ul};function Bl(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function zl(t){var e=t.x,i=t.y,a=E(e-this.long0,this.over),s=tt(i-this.lat0);return t.x=this.x0+this.a*a*this.rc,t.y=this.y0+this.a*s,t}function kl(t){var e=t.x,i=t.y;return t.x=E(this.long0+(e-this.x0)/(this.a*this.rc),this.over),t.y=tt(this.lat0+(i-this.y0)/this.a),t}var Hl=["Equirectangular","Equidistant_Cylindrical","Equidistant_Cylindrical_Spherical","eqc"];const Wl={init:Bl,forward:zl,inverse:kl,names:Hl};var hr=20;function Xl(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Yt(this.es),this.e1=Qt(this.es),this.e2=Jt(this.es),this.e3=ei(this.es),this.ml0=this.a*le(this.e0,this.e1,this.e2,this.e3,this.lat0)}function jl(t){var e=t.x,i=t.y,a,s,r,n=E(e-this.long0,this.over);if(r=n*Math.sin(i),this.sphere)Math.abs(i)<=x?(a=this.a*n,s=-1*this.a*this.lat0):(a=this.a*Math.sin(r)/Math.tan(i),s=this.a*(tt(i-this.lat0)+(1-Math.cos(r))/Math.tan(i)));else if(Math.abs(i)<=x)a=this.a*n,s=-1*this.ml0;else{var o=ts(this.a,this.e,Math.sin(i))/Math.tan(i);a=o*Math.sin(r),s=this.a*le(this.e0,this.e1,this.e2,this.e3,i)-this.ml0+o*(1-Math.cos(r))}return t.x=a+this.x0,t.y=s+this.y0,t}function $l(t){var e,i,a,s,r,n,o,f,l;if(a=t.x-this.x0,s=t.y-this.y0,this.sphere)if(Math.abs(s+this.a*this.lat0)<=x)e=E(a/this.a+this.long0,this.over),i=0;else{n=this.lat0+s/this.a,o=a*a/this.a/this.a+n*n,f=n;var c;for(r=hr;r;--r)if(c=Math.tan(f),l=-1*(n*(f*c+1)-f-.5*(f*f+o)*c)/((f-n)/c-1),f+=l,Math.abs(l)<=x){i=f;break}e=E(this.long0+Math.asin(a*Math.tan(f)/this.a)/Math.sin(i),this.over)}else if(Math.abs(s+this.ml0)<=x)i=0,e=E(this.long0+a/this.a,this.over);else{n=(this.ml0+s)/this.a,o=a*a/this.a/this.a+n*n,f=n;var u,h,m,g,v;for(r=hr;r;--r)if(v=this.e*Math.sin(f),u=Math.sqrt(1-v*v)*Math.tan(f),h=this.a*le(this.e0,this.e1,this.e2,this.e3,f),m=this.e0-2*this.e1*Math.cos(2*f)+4*this.e2*Math.cos(4*f)-6*this.e3*Math.cos(6*f),g=h/this.a,l=(n*(u*g+1)-g-.5*u*(g*g+o))/(this.es*Math.sin(2*f)*(g*g+o-2*n*g)/(4*u)+(n-g)*(u*m-2/Math.sin(2*f))-m),f-=l,Math.abs(l)<=x){i=f;break}u=Math.sqrt(1-this.es*Math.pow(Math.sin(i),2))*Math.tan(i),e=E(this.long0+Math.asin(a*u/this.a)/Math.sin(i),this.over)}return t.x=e,t.y=i,t}var ql=["Polyconic","American_Polyconic","poly"];const Kl={init:Xl,forward:jl,inverse:$l,names:ql};function Zl(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function Yl(t){var e,i=t.x,a=t.y,s=a-this.lat0,r=i-this.long0,n=s/Ot*1e-5,o=r,f=1,l=0;for(e=1;e<=10;e++)f=f*n,l=l+this.A[e]*f;var c=l,u=o,h=1,m=0,g,v,_=0,S=0;for(e=1;e<=6;e++)g=h*c-m*u,v=m*c+h*u,h=g,m=v,_=_+this.B_re[e]*h-this.B_im[e]*m,S=S+this.B_im[e]*h+this.B_re[e]*m;return t.x=S*this.a+this.x0,t.y=_*this.a+this.y0,t}function Ql(t){var e,i=t.x,a=t.y,s=i-this.x0,r=a-this.y0,n=r/this.a,o=s/this.a,f=1,l=0,c,u,h=0,m=0;for(e=1;e<=6;e++)c=f*n-l*o,u=l*n+f*o,f=c,l=u,h=h+this.C_re[e]*f-this.C_im[e]*l,m=m+this.C_im[e]*f+this.C_re[e]*l;for(var g=0;g<this.iterations;g++){var v=h,_=m,S,M,A=n,L=o;for(e=2;e<=6;e++)S=v*h-_*m,M=_*h+v*m,v=S,_=M,A=A+(e-1)*(this.B_re[e]*v-this.B_im[e]*_),L=L+(e-1)*(this.B_im[e]*v+this.B_re[e]*_);v=1,_=0;var b=this.B_re[1],O=this.B_im[1];for(e=2;e<=6;e++)S=v*h-_*m,M=_*h+v*m,v=S,_=M,b=b+e*(this.B_re[e]*v-this.B_im[e]*_),O=O+e*(this.B_im[e]*v+this.B_re[e]*_);var k=b*b+O*O;h=(A*b+L*O)/k,m=(L*b-A*O)/k}var re=h,Q=m,$e=1,we=0;for(e=1;e<=9;e++)$e=$e*re,we=we+this.D[e]*$e;var ut=this.lat0+we*Ot*1e5,ct=this.long0+Q;return t.x=ct,t.y=ut,t}var Jl=["New_Zealand_Map_Grid","nzmg"];const eh={init:Zl,forward:Yl,inverse:Ql,names:Jl};function th(){}function ih(t){var e=t.x,i=t.y,a=E(e-this.long0,this.over),s=this.x0+this.a*a,r=this.y0+this.a*Math.log(Math.tan(Math.PI/4+i/2.5))*1.25;return t.x=s,t.y=r,t}function sh(t){t.x-=this.x0,t.y-=this.y0;var e=E(this.long0+t.x/this.a,this.over),i=2.5*(Math.atan(Math.exp(.8*t.y/this.a))-Math.PI/4);return t.x=e,t.y=i,t}var rh=["Miller_Cylindrical","mill"];const ah={init:th,forward:ih,inverse:sh,names:rh};var nh=20;function oh(){this.long0=this.long0||0,this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=Ki(this.es)}function fh(t){var e,i,a=t.x,s=t.y;if(a=E(a-this.long0,this.over),this.sphere){if(!this.m)s=this.n!==1?Math.asin(this.n*Math.sin(s)):s;else for(var r=this.n*Math.sin(s),n=nh;n;--n){var o=(this.m*s+Math.sin(s)-r)/(this.m+Math.cos(s));if(s-=o,Math.abs(o)<x)break}e=this.a*this.C_x*a*(this.m+Math.cos(s)),i=this.a*this.C_y*s}else{var f=Math.sin(s),l=Math.cos(s);i=this.a*Pt(s,f,l,this.en),e=this.a*a*l/Math.sqrt(1-this.es*f*f)}return t.x=e,t.y=i,t}function lh(t){var e,i,a,s;return t.x-=this.x0,a=t.x/this.a,t.y-=this.y0,e=t.y/this.a,this.sphere?(e/=this.C_y,a=a/(this.C_x*(this.m+Math.cos(e))),this.m?e=et((this.m*e+Math.sin(e))/this.n):this.n!==1&&(e=et(Math.sin(e)/this.n)),a=E(a+this.long0,this.over),e=tt(e)):(e=Zi(t.y/this.a,this.es,this.en),s=Math.abs(e),s<p?(s=Math.sin(e),i=this.long0+t.x*Math.sqrt(1-this.es*s*s)/(this.a*Math.cos(e)),a=E(i,this.over)):s-x<p&&(a=this.long0)),t.x=a,t.y=e,t}var hh=["Sinusoidal","sinu"];const uh={init:oh,forward:fh,inverse:lh,names:hh};function ch(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0}function dh(t){for(var e=t.x,i=t.y,a=E(e-this.long0,this.over),s=i,r=Math.PI*Math.sin(i);;){var n=-(s+Math.sin(s)-r)/(1+Math.cos(s));if(s+=n,Math.abs(n)<x)break}s/=2,Math.PI/2-Math.abs(i)<x&&(a=0);var o=.900316316158*this.a*a*Math.cos(s)+this.x0,f=1.4142135623731*this.a*Math.sin(s)+this.y0;return t.x=o,t.y=f,t}function mh(t){var e,i;t.x-=this.x0,t.y-=this.y0,i=t.y/(1.4142135623731*this.a),Math.abs(i)>.999999999999&&(i=.999999999999),e=Math.asin(i);var a=E(this.long0+t.x/(.900316316158*this.a*Math.cos(e)),this.over);a<-Math.PI&&(a=-Math.PI),a>Math.PI&&(a=Math.PI),i=(2*e+Math.sin(2*e))/Math.PI,Math.abs(i)>1&&(i=1);var s=Math.asin(i);return t.x=a,t.y=s,t}var gh=["Mollweide","moll"];const vh={init:ch,forward:dh,inverse:mh,names:gh};function _h(){Math.abs(this.lat1+this.lat2)<x||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Yt(this.es),this.e1=Qt(this.es),this.e2=Jt(this.es),this.e3=ei(this.es),this.sin_phi=Math.sin(this.lat1),this.cos_phi=Math.cos(this.lat1),this.ms1=We(this.e,this.sin_phi,this.cos_phi),this.ml1=le(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<x?this.ns=this.sin_phi:(this.sin_phi=Math.sin(this.lat2),this.cos_phi=Math.cos(this.lat2),this.ms2=We(this.e,this.sin_phi,this.cos_phi),this.ml2=le(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=le(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function ph(t){var e=t.x,i=t.y,a;if(this.sphere)a=this.a*(this.g-i);else{var s=le(this.e0,this.e1,this.e2,this.e3,i);a=this.a*(this.g-s)}var r=this.ns*E(e-this.long0,this.over),n=this.x0+a*Math.sin(r),o=this.y0+this.rh-a*Math.cos(r);return t.x=n,t.y=o,t}function xh(t){t.x-=this.x0,t.y=this.rh-t.y+this.y0;var e,i,a,s;this.ns>=0?(i=Math.sqrt(t.x*t.x+t.y*t.y),e=1):(i=-Math.sqrt(t.x*t.x+t.y*t.y),e=-1);var r=0;if(i!==0&&(r=Math.atan2(e*t.x,e*t.y)),this.sphere)return s=E(this.long0+r/this.ns,this.over),a=tt(this.g-i/this.a),t.x=s,t.y=a,t;var n=this.g-i/this.a;return a=_i(n,this.e0,this.e1,this.e2,this.e3),s=E(this.long0+r/this.ns,this.over),t.x=s,t.y=a,t}var Sh=["Equidistant_Conic","eqdc"];const Eh={init:_h,forward:ph,inverse:xh,names:Sh};function Th(){this.R=this.a}function Mh(t){var e=t.x,i=t.y,a=E(e-this.long0,this.over),s,r;Math.abs(i)<=x&&(s=this.x0+this.R*a,r=this.y0);var n=et(2*Math.abs(i/Math.PI));(Math.abs(a)<=x||Math.abs(Math.abs(i)-p)<=x)&&(s=this.x0,i>=0?r=this.y0+Math.PI*this.R*Math.tan(.5*n):r=this.y0+Math.PI*this.R*-Math.tan(.5*n));var o=.5*Math.abs(Math.PI/a-a/Math.PI),f=o*o,l=Math.sin(n),c=Math.cos(n),u=c/(l+c-1),h=u*u,m=u*(2/l-1),g=m*m,v=Math.PI*this.R*(o*(u-g)+Math.sqrt(f*(u-g)*(u-g)-(g+f)*(h-g)))/(g+f);a<0&&(v=-v),s=this.x0+v;var _=f+u;return v=Math.PI*this.R*(m*_-o*Math.sqrt((g+f)*(f+1)-_*_))/(g+f),i>=0?r=this.y0+v:r=this.y0-v,t.x=s,t.y=r,t}function yh(t){var e,i,a,s,r,n,o,f,l,c,u,h,m;return t.x-=this.x0,t.y-=this.y0,u=Math.PI*this.R,a=t.x/u,s=t.y/u,r=a*a+s*s,n=-Math.abs(s)*(1+r),o=n-2*s*s+a*a,f=-2*n+1+2*s*s+r*r,m=s*s/f+(2*o*o*o/f/f/f-9*n*o/f/f)/27,l=(n-o*o/3/f)/f,c=2*Math.sqrt(-l/3),u=3*m/l/c,Math.abs(u)>1&&(u>=0?u=1:u=-1),h=Math.acos(u)/3,t.y>=0?i=(-c*Math.cos(h+Math.PI/3)-o/3/f)*Math.PI:i=-(-c*Math.cos(h+Math.PI/3)-o/3/f)*Math.PI,Math.abs(a)<x?e=this.long0:e=E(this.long0+Math.PI*(r-1+Math.sqrt(1+2*(a*a-s*s)+r*r))/2/a,this.over),t.x=e,t.y=i,t}var Ph=["Van_der_Grinten_I","VanDerGrinten","Van_der_Grinten","vandg"];const Ch={init:Th,forward:Mh,inverse:yh,names:Ph};function Ah(t,e,i,a,s,r){const n=a-e,o=Math.atan((1-r)*Math.tan(t)),f=Math.atan((1-r)*Math.tan(i)),l=Math.sin(o),c=Math.cos(o),u=Math.sin(f),h=Math.cos(f);let m=n,g,v=100,_,S,M,A,L,b,O,k,re,Q,$e,we,ut,ct;do{if(_=Math.sin(m),S=Math.cos(m),M=Math.sqrt(h*_*(h*_)+(c*u-l*h*S)*(c*u-l*h*S)),M===0)return{azi1:0,s12:0};A=l*u+c*h*S,L=Math.atan2(M,A),b=c*h*_/M,O=1-b*b,k=O!==0?A-2*l*u/O:0,re=r/16*O*(4+r*(4-3*O)),g=m,m=n+(1-re)*r*b*(L+re*M*(k+re*A*(-1+2*k*k)))}while(Math.abs(m-g)>1e-12&&--v>0);return v===0?{azi1:NaN,s12:NaN}:(Q=O*(s*s-s*(1-r)*(s*(1-r)))/(s*(1-r)*(s*(1-r))),$e=1+Q/16384*(4096+Q*(-768+Q*(320-175*Q))),we=Q/1024*(256+Q*(-128+Q*(74-47*Q))),ut=we*M*(k+we/4*(A*(-1+2*k*k)-we/6*k*(-3+4*M*M)*(-3+4*k*k))),ct=s*(1-r)*$e*(L-ut),{azi1:Math.atan2(h*_,c*u-l*h*S),s12:ct})}function Nh(t,e,i,a,s,r){const n=Math.atan((1-r)*Math.tan(t)),o=Math.sin(n),f=Math.cos(n),l=Math.sin(i),c=Math.cos(i),u=Math.atan2(o,f*c),h=f*l,m=1-h*h,g=m*(s*s-s*(1-r)*(s*(1-r)))/(s*(1-r)*(s*(1-r))),v=1+g/16384*(4096+g*(-768+g*(320-175*g))),_=g/1024*(256+g*(-128+g*(74-47*g)));let S=a/(s*(1-r)*v),M,A=100,L,b,O,k;do L=Math.cos(2*u+S),b=Math.sin(S),O=Math.cos(S),k=_*b*(L+_/4*(O*(-1+2*L*L)-_/6*L*(-3+4*b*b)*(-3+4*L*L))),M=S,S=a/(s*(1-r)*v)+k;while(Math.abs(S-M)>1e-12&&--A>0);if(A===0)return{lat2:NaN,lon2:NaN};const re=o*b-f*O*c,Q=Math.atan2(o*O+f*b*c,(1-r)*Math.sqrt(h*h+re*re)),$e=Math.atan2(b*l,f*O-o*b*c),we=r/16*m*(4+r*(4-3*m)),ut=$e-(1-we)*r*h*(S+we*b*(L+we*O*(-1+2*L*L))),ct=e+ut;return{lat2:Q,lon2:ct}}function wh(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0),this.f=this.es/(1+Math.sqrt(1-this.es))}function Ih(t){var e=t.x,i=t.y,a=Math.sin(t.y),s=Math.cos(t.y),r=E(e-this.long0,this.over),n,o,f,l,c,u,h,m,g,v,_;return this.sphere?Math.abs(this.sin_p12-1)<=x?(t.x=this.x0+this.a*(p-i)*Math.sin(r),t.y=this.y0-this.a*(p-i)*Math.cos(r),t):Math.abs(this.sin_p12+1)<=x?(t.x=this.x0+this.a*(p+i)*Math.sin(r),t.y=this.y0+this.a*(p+i)*Math.cos(r),t):(g=this.sin_p12*a+this.cos_p12*s*Math.cos(r),h=Math.acos(g),m=h?h/Math.sin(h):1,t.x=this.x0+this.a*m*s*Math.sin(r),t.y=this.y0+this.a*m*(this.cos_p12*a-this.sin_p12*s*Math.cos(r)),t):(n=Yt(this.es),o=Qt(this.es),f=Jt(this.es),l=ei(this.es),Math.abs(this.sin_p12-1)<=x?(c=this.a*le(n,o,f,l,p),u=this.a*le(n,o,f,l,i),t.x=this.x0+(c-u)*Math.sin(r),t.y=this.y0-(c-u)*Math.cos(r),t):Math.abs(this.sin_p12+1)<=x?(c=this.a*le(n,o,f,l,p),u=this.a*le(n,o,f,l,i),t.x=this.x0+(c+u)*Math.sin(r),t.y=this.y0+(c+u)*Math.cos(r),t):Math.abs(e)<x&&Math.abs(i-this.lat0)<x?(t.x=t.y=0,t):(v=Ah(this.lat0,this.long0,i,e,this.a,this.f),_=v.azi1,t.x=v.s12*Math.sin(_),t.y=v.s12*Math.cos(_),t))}function bh(t){t.x-=this.x0,t.y-=this.y0;var e,i,a,s,r,n,o,f,l,c,u,h,m,g,v,_;return this.sphere?(e=Math.sqrt(t.x*t.x+t.y*t.y),e>2*p*this.a?void 0:(i=e/this.a,a=Math.sin(i),s=Math.cos(i),r=this.long0,Math.abs(e)<=x?n=this.lat0:(n=et(s*this.sin_p12+t.y*a*this.cos_p12/e),o=Math.abs(this.lat0)-p,Math.abs(o)<=x?this.lat0>=0?r=E(this.long0+Math.atan2(t.x,-t.y),this.over):r=E(this.long0-Math.atan2(-t.x,t.y),this.over):r=E(this.long0+Math.atan2(t.x*a,e*this.cos_p12*s-t.y*this.sin_p12*a),this.over)),t.x=r,t.y=n,t)):(f=Yt(this.es),l=Qt(this.es),c=Jt(this.es),u=ei(this.es),Math.abs(this.sin_p12-1)<=x?(h=this.a*le(f,l,c,u,p),e=Math.sqrt(t.x*t.x+t.y*t.y),m=h-e,n=_i(m/this.a,f,l,c,u),r=E(this.long0+Math.atan2(t.x,-1*t.y),this.over),t.x=r,t.y=n,t):Math.abs(this.sin_p12+1)<=x?(h=this.a*le(f,l,c,u,p),e=Math.sqrt(t.x*t.x+t.y*t.y),m=e-h,n=_i(m/this.a,f,l,c,u),r=E(this.long0+Math.atan2(t.x,t.y),this.over),t.x=r,t.y=n,t):(g=Math.atan2(t.x,t.y),v=Math.sqrt(t.x*t.x+t.y*t.y),_=Nh(this.lat0,this.long0,g,v,this.a,this.f),t.x=_.lon2,t.y=_.lat2,t))}var Lh=["Azimuthal_Equidistant","aeqd"];const Rh={init:wh,forward:Ih,inverse:bh,names:Lh};function Oh(){this.sin_p14=Math.sin(this.lat0||0),this.cos_p14=Math.cos(this.lat0||0)}function Dh(t){var e,i,a,s,r,n,o,f,l=t.x,c=t.y;return a=E(l-(this.long0||0),this.over),e=Math.sin(c),i=Math.cos(c),s=Math.cos(a),n=this.sin_p14*e+this.cos_p14*i*s,r=1,(n>0||Math.abs(n)<=x)&&(o=this.a*r*i*Math.sin(a),f=(this.y0||0)+this.a*r*(this.cos_p14*e-this.sin_p14*i*s)),t.x=o,t.y=f,t}function Fh(t){var e,i,a,s,r,n,o,f,l;return t.x-=this.x0||0,t.y-=this.y0||0,e=Math.sqrt(t.x*t.x+t.y*t.y),i=et(e/this.a),a=Math.sin(i),s=Math.cos(i),f=this.long0||0,l=this.lat0||0,n=f,Math.abs(e)<=x?(o=l,t.x=n,t.y=o,t):(o=et(s*this.sin_p14+t.y*a*this.cos_p14/e),r=Math.abs(l)-p,Math.abs(r)<=x?(l>=0?n=E(f+Math.atan2(t.x,-t.y),this.over):n=E(f-Math.atan2(-t.x,t.y),this.over),t.x=n,t.y=o,t):(n=E(f+Math.atan2(t.x*a,e*this.cos_p14*s-t.y*this.sin_p14*a),this.over),t.x=n,t.y=o,t))}var Gh=["ortho"];const Uh={init:Oh,forward:Dh,inverse:Fh,names:Gh};var H={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},F={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function Vh(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=p-D/2?this.face=H.TOP:this.lat0<=-(p-D/2)?this.face=H.BOTTOM:Math.abs(this.long0)<=D?this.face=H.FRONT:Math.abs(this.long0)<=p+D?this.face=this.long0>0?H.RIGHT:H.LEFT:this.face=H.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function Bh(t){var e={x:0,y:0},i,a,s,r,n,o,f={value:0};if(t.x-=this.long0,this.es!==0?i=Math.atan(this.one_minus_f_squared*Math.tan(t.y)):i=t.y,a=t.x,this.face===H.TOP)r=p-i,a>=D&&a<=p+D?(f.value=F.AREA_0,s=a-p):a>p+D||a<=-(p+D)?(f.value=F.AREA_1,s=a>0?a-j:a+j):a>-(p+D)&&a<=-D?(f.value=F.AREA_2,s=a+p):(f.value=F.AREA_3,s=a);else if(this.face===H.BOTTOM)r=p+i,a>=D&&a<=p+D?(f.value=F.AREA_0,s=-a+p):a<D&&a>=-D?(f.value=F.AREA_1,s=-a):a<-D&&a>=-(p+D)?(f.value=F.AREA_2,s=-a-p):(f.value=F.AREA_3,s=a>0?-a+j:-a-j);else{var l,c,u,h,m,g,v;this.face===H.RIGHT?a=Mt(a,+p):this.face===H.BACK?a=Mt(a,+j):this.face===H.LEFT&&(a=Mt(a,-p)),h=Math.sin(i),m=Math.cos(i),g=Math.sin(a),v=Math.cos(a),l=m*v,c=m*g,u=h,this.face===H.FRONT?(r=Math.acos(l),s=ri(r,u,c,f)):this.face===H.RIGHT?(r=Math.acos(c),s=ri(r,u,-l,f)):this.face===H.BACK?(r=Math.acos(-l),s=ri(r,u,-c,f)):this.face===H.LEFT?(r=Math.acos(-c),s=ri(r,u,l,f)):(r=s=0,f.value=F.AREA_0)}return o=Math.atan(12/j*(s+Math.acos(Math.sin(s)*Math.cos(D))-p)),n=Math.sqrt((1-Math.cos(r))/(Math.cos(o)*Math.cos(o))/(1-Math.cos(Math.atan(1/Math.cos(s))))),f.value===F.AREA_1?o+=p:f.value===F.AREA_2?o+=j:f.value===F.AREA_3&&(o+=1.5*j),e.x=n*Math.cos(o),e.y=n*Math.sin(o),e.x=e.x*this.a+this.x0,e.y=e.y*this.a+this.y0,t.x=e.x,t.y=e.y,t}function zh(t){var e={lam:0,phi:0},i,a,s,r,n,o,f,l,c,u={value:0};if(t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,a=Math.atan(Math.sqrt(t.x*t.x+t.y*t.y)),i=Math.atan2(t.y,t.x),t.x>=0&&t.x>=Math.abs(t.y)?u.value=F.AREA_0:t.y>=0&&t.y>=Math.abs(t.x)?(u.value=F.AREA_1,i-=p):t.x<0&&-t.x>=Math.abs(t.y)?(u.value=F.AREA_2,i=i<0?i+j:i-j):(u.value=F.AREA_3,i+=p),c=j/12*Math.tan(i),n=Math.sin(c)/(Math.cos(c)-1/Math.sqrt(2)),o=Math.atan(n),s=Math.cos(i),r=Math.tan(a),f=1-s*s*r*r*(1-Math.cos(Math.atan(1/Math.cos(o)))),f<-1?f=-1:f>1&&(f=1),this.face===H.TOP)l=Math.acos(f),e.phi=p-l,u.value===F.AREA_0?e.lam=o+p:u.value===F.AREA_1?e.lam=o<0?o+j:o-j:u.value===F.AREA_2?e.lam=o-p:e.lam=o;else if(this.face===H.BOTTOM)l=Math.acos(f),e.phi=l-p,u.value===F.AREA_0?e.lam=-o+p:u.value===F.AREA_1?e.lam=-o:u.value===F.AREA_2?e.lam=-o-p:e.lam=o<0?-o-j:-o+j;else{var h,m,g;h=f,c=h*h,c>=1?g=0:g=Math.sqrt(1-c)*Math.sin(o),c+=g*g,c>=1?m=0:m=Math.sqrt(1-c),u.value===F.AREA_1?(c=m,m=-g,g=c):u.value===F.AREA_2?(m=-m,g=-g):u.value===F.AREA_3&&(c=m,m=g,g=-c),this.face===H.RIGHT?(c=h,h=-m,m=c):this.face===H.BACK?(h=-h,m=-m):this.face===H.LEFT&&(c=h,h=m,m=-c),e.phi=Math.acos(-g)-p,e.lam=Math.atan2(m,h),this.face===H.RIGHT?e.lam=Mt(e.lam,-p):this.face===H.BACK?e.lam=Mt(e.lam,-j):this.face===H.LEFT&&(e.lam=Mt(e.lam,+p))}if(this.es!==0){var v,_,S;v=e.phi<0?1:0,_=Math.tan(e.phi),S=this.b/Math.sqrt(_*_+this.one_minus_f_squared),e.phi=Math.atan(Math.sqrt(this.a*this.a-S*S)/(this.one_minus_f*S)),v&&(e.phi=-e.phi)}return e.lam+=this.long0,t.x=e.lam,t.y=e.phi,t}function ri(t,e,i,a){var s;return t<x?(a.value=F.AREA_0,s=0):(s=Math.atan2(e,i),Math.abs(s)<=D?a.value=F.AREA_0:s>D&&s<=p+D?(a.value=F.AREA_1,s-=p):s>p+D||s<=-(p+D)?(a.value=F.AREA_2,s=s>=0?s-j:s+j):(a.value=F.AREA_3,s+=p)),s}function Mt(t,e){var i=t+e;return i<-j?i+=Wt:i>+j&&(i-=Wt),i}var kh=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const Hh={init:Vh,forward:Bh,inverse:zh,names:kh};var Hi=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],bt=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],Hr=.8487,Wr=1.3523,Xr=me/5,Wh=1/Xr,St=18,pi=function(t,e){return t[0]+e*(t[1]+e*(t[2]+e*t[3]))},Xh=function(t,e){return t[1]+e*(2*t[2]+e*3*t[3])};function jh(t,e,i,a){for(var s=e;a;--a){var r=t(s);if(s-=r,Math.abs(r)<i)break}return s}function $h(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function qh(t){var e=E(t.x-this.long0,this.over),i=Math.abs(t.y),a=Math.floor(i*Xr);a<0?a=0:a>=St&&(a=St-1),i=me*(i-Wh*a);var s={x:pi(Hi[a],i)*e,y:pi(bt[a],i)};return t.y<0&&(s.y=-s.y),s.x=s.x*this.a*Hr+this.x0,s.y=s.y*this.a*Wr+this.y0,s}function Kh(t){var e={x:(t.x-this.x0)/(this.a*Hr),y:Math.abs(t.y-this.y0)/(this.a*Wr)};if(e.y>=1)e.x/=Hi[St][0],e.y=t.y<0?-p:p;else{var i=Math.floor(e.y*St);for(i<0?i=0:i>=St&&(i=St-1);;)if(bt[i][0]>e.y)--i;else if(bt[i+1][0]<=e.y)++i;else break;var a=bt[i],s=5*(e.y-a[0])/(bt[i+1][0]-a[0]);s=jh(function(r){return(pi(a,r)-e.y)/Xh(a,r)},s,x,100),e.x/=pi(Hi[i],s),e.y=(5*i+s)*W,t.y<0&&(e.y=-e.y)}return e.x=E(e.x+this.long0,this.over),e}var Zh=["Robinson","robin"];const Yh={init:$h,forward:qh,inverse:Kh,names:Zh};function Qh(){this.name="geocent"}function Jh(t){var e=Lr(t,this.es,this.a);return e}function eu(t){var e=Rr(t,this.es,this.a,this.b);return e}var tu=["Geocentric","geocentric","geocent","Geocent"];const iu={init:Qh,forward:Jh,inverse:eu,names:tu};var ae={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},Ct={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function su(){if(Object.keys(Ct).forEach(function(i){if(typeof this[i]>"u")this[i]=Ct[i].def;else{if(Ct[i].num&&isNaN(this[i]))throw new Error("Invalid parameter value, must be numeric "+i+" = "+this[i]);Ct[i].num&&(this[i]=parseFloat(this[i]))}Ct[i].degrees&&(this[i]=this[i]*W)}.bind(this)),Math.abs(Math.abs(this.lat0)-p)<x?this.mode=this.lat0<0?ae.S_POLE:ae.N_POLE:Math.abs(this.lat0)<x?this.mode=ae.EQUIT:(this.mode=ae.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var t=this.tilt,e=this.azi;this.cg=Math.cos(e),this.sg=Math.sin(e),this.cw=Math.cos(t),this.sw=Math.sin(t)}function ru(t){t.x-=this.long0;var e=Math.sin(t.y),i=Math.cos(t.y),a=Math.cos(t.x),s,r;switch(this.mode){case ae.OBLIQ:r=this.sinph0*e+this.cosph0*i*a;break;case ae.EQUIT:r=i*a;break;case ae.S_POLE:r=-e;break;case ae.N_POLE:r=e;break}switch(r=this.pn1/(this.p-r),s=r*i*Math.sin(t.x),this.mode){case ae.OBLIQ:r*=this.cosph0*e-this.sinph0*i*a;break;case ae.EQUIT:r*=e;break;case ae.N_POLE:r*=-(i*a);break;case ae.S_POLE:r*=i*a;break}var n,o;return n=r*this.cg+s*this.sg,o=1/(n*this.sw*this.h1+this.cw),s=(s*this.cg-r*this.sg)*this.cw*o,r=n*o,t.x=s*this.a,t.y=r*this.a,t}function au(t){t.x/=this.a,t.y/=this.a;var e={x:t.x,y:t.y},i,a,s;s=1/(this.pn1-t.y*this.sw),i=this.pn1*t.x*s,a=this.pn1*t.y*this.cw*s,t.x=i*this.cg+a*this.sg,t.y=a*this.cg-i*this.sg;var r=de(t.x,t.y);if(Math.abs(r)<x)e.x=0,e.y=t.y;else{var n,o;switch(o=1-r*r*this.pfact,o=(this.p-Math.sqrt(o))/(this.pn1/r+r/this.pn1),n=Math.sqrt(1-o*o),this.mode){case ae.OBLIQ:e.y=Math.asin(n*this.sinph0+t.y*o*this.cosph0/r),t.y=(n-this.sinph0*Math.sin(e.y))*r,t.x*=o*this.cosph0;break;case ae.EQUIT:e.y=Math.asin(t.y*o/r),t.y=n*r,t.x*=o;break;case ae.N_POLE:e.y=Math.asin(n),t.y=-t.y;break;case ae.S_POLE:e.y=-Math.asin(n);break}e.x=Math.atan2(t.x,t.y)}return t.x=e.x+this.long0,t.y=e.y,t}var nu=["Tilted_Perspective","tpers"];const ou={init:su,forward:ru,inverse:au,names:nu};function fu(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var t=1-this.es,e=1/t;this.radius_p=Math.sqrt(t),this.radius_p2=t,this.radius_p_inv2=e,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function lu(t){var e=t.x,i=t.y,a,s,r,n;if(e=e-this.long0,this.shape==="ellipse"){i=Math.atan(this.radius_p2*Math.tan(i));var o=this.radius_p/de(this.radius_p*Math.cos(i),Math.sin(i));if(s=o*Math.cos(e)*Math.cos(i),r=o*Math.sin(e)*Math.cos(i),n=o*Math.sin(i),(this.radius_g-s)*s-r*r-n*n*this.radius_p_inv2<0)return t.x=Number.NaN,t.y=Number.NaN,t;a=this.radius_g-s,this.flip_axis?(t.x=this.radius_g_1*Math.atan(r/de(n,a)),t.y=this.radius_g_1*Math.atan(n/a)):(t.x=this.radius_g_1*Math.atan(r/a),t.y=this.radius_g_1*Math.atan(n/de(r,a)))}else this.shape==="sphere"&&(a=Math.cos(i),s=Math.cos(e)*a,r=Math.sin(e)*a,n=Math.sin(i),a=this.radius_g-s,this.flip_axis?(t.x=this.radius_g_1*Math.atan(r/de(n,a)),t.y=this.radius_g_1*Math.atan(n/a)):(t.x=this.radius_g_1*Math.atan(r/a),t.y=this.radius_g_1*Math.atan(n/de(r,a))));return t.x=t.x*this.a,t.y=t.y*this.a,t}function hu(t){var e=-1,i=0,a=0,s,r,n,o;if(t.x=t.x/this.a,t.y=t.y/this.a,this.shape==="ellipse"){this.flip_axis?(a=Math.tan(t.y/this.radius_g_1),i=Math.tan(t.x/this.radius_g_1)*de(1,a)):(i=Math.tan(t.x/this.radius_g_1),a=Math.tan(t.y/this.radius_g_1)*de(1,i));var f=a/this.radius_p;if(s=i*i+f*f+e*e,r=2*this.radius_g*e,n=r*r-4*s*this.C,n<0)return t.x=Number.NaN,t.y=Number.NaN,t;o=(-r-Math.sqrt(n))/(2*s),e=this.radius_g+o*e,i*=o,a*=o,t.x=Math.atan2(i,e),t.y=Math.atan(a*Math.cos(t.x)/e),t.y=Math.atan(this.radius_p_inv2*Math.tan(t.y))}else if(this.shape==="sphere"){if(this.flip_axis?(a=Math.tan(t.y/this.radius_g_1),i=Math.tan(t.x/this.radius_g_1)*Math.sqrt(1+a*a)):(i=Math.tan(t.x/this.radius_g_1),a=Math.tan(t.y/this.radius_g_1)*Math.sqrt(1+i*i)),s=i*i+a*a+e*e,r=2*this.radius_g*e,n=r*r-4*s*this.C,n<0)return t.x=Number.NaN,t.y=Number.NaN,t;o=(-r-Math.sqrt(n))/(2*s),e=this.radius_g+o*e,i*=o,a*=o,t.x=Math.atan2(i,e),t.y=Math.atan(a*Math.cos(t.x)/e)}return t.x=t.x+this.long0,t}var uu=["Geostationary Satellite View","Geostationary_Satellite","geos"];const cu={init:fu,forward:lu,inverse:hu,names:uu};var Dt=1.340264,Ft=-.081106,Gt=893e-6,Ut=.003796,xi=Math.sqrt(3)/2;function du(){this.es=0,this.long0=this.long0!==void 0?this.long0:0,this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0}function mu(t){var e=E(t.x-this.long0,this.over),i=t.y,a=Math.asin(xi*Math.sin(i)),s=a*a,r=s*s*s;return t.x=e*Math.cos(a)/(xi*(Dt+3*Ft*s+r*(7*Gt+9*Ut*s))),t.y=a*(Dt+Ft*s+r*(Gt+Ut*s)),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function gu(t){t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a;var e=1e-9,i=12,a=t.y,s,r,n,o,f,l;for(l=0;l<i&&(s=a*a,r=s*s*s,n=a*(Dt+Ft*s+r*(Gt+Ut*s))-t.y,o=Dt+3*Ft*s+r*(7*Gt+9*Ut*s),a-=f=n/o,!(Math.abs(f)<e));++l);return s=a*a,r=s*s*s,t.x=xi*t.x*(Dt+3*Ft*s+r*(7*Gt+9*Ut*s))/Math.cos(a),t.y=Math.asin(Math.sin(a)/xi),t.x=E(t.x+this.long0,this.over),t}var vu=["eqearth","Equal Earth","Equal_Earth"];const _u={init:du,forward:mu,inverse:gu,names:vu};var $t=1e-10;function pu(){var t;if(this.phi1=this.lat1,Math.abs(this.phi1)<$t)throw new Error;this.es?(this.en=Ki(this.es),this.m1=Pt(this.phi1,this.am1=Math.sin(this.phi1),t=Math.cos(this.phi1),this.en),this.am1=t/(Math.sqrt(1-this.es*this.am1*this.am1)*this.am1),this.inverse=Su,this.forward=xu):(Math.abs(this.phi1)+$t>=p?this.cphi1=0:this.cphi1=1/Math.tan(this.phi1),this.inverse=Tu,this.forward=Eu)}function xu(t){var e=E(t.x-(this.long0||0),this.over),i=t.y,a,s,r;return a=this.am1+this.m1-Pt(i,s=Math.sin(i),r=Math.cos(i),this.en),s=r*e/(a*Math.sqrt(1-this.es*s*s)),t.x=a*Math.sin(s),t.y=this.am1-a*Math.cos(s),t.x=this.a*t.x+(this.x0||0),t.y=this.a*t.y+(this.y0||0),t}function Su(t){t.x=(t.x-(this.x0||0))/this.a,t.y=(t.y-(this.y0||0))/this.a;var e,i,a,s;if(i=de(t.x,t.y=this.am1-t.y),s=Zi(this.am1+this.m1-i,this.es,this.en),(e=Math.abs(s))<p)e=Math.sin(s),a=i*Math.atan2(t.x,t.y)*Math.sqrt(1-this.es*e*e)/Math.cos(s);else if(Math.abs(e-p)<=$t)a=0;else throw new Error;return t.x=E(a+(this.long0||0),this.over),t.y=tt(s),t}function Eu(t){var e=E(t.x-(this.long0||0),this.over),i=t.y,a,s;return s=this.cphi1+this.phi1-i,Math.abs(s)>$t?(t.x=s*Math.sin(a=e*Math.cos(i)/s),t.y=this.cphi1-s*Math.cos(a)):t.x=t.y=0,t.x=this.a*t.x+(this.x0||0),t.y=this.a*t.y+(this.y0||0),t}function Tu(t){t.x=(t.x-(this.x0||0))/this.a,t.y=(t.y-(this.y0||0))/this.a;var e,i,a=de(t.x,t.y=this.cphi1-t.y);if(i=this.cphi1+this.phi1-a,Math.abs(i)>p)throw new Error;return Math.abs(Math.abs(i)-p)<=$t?e=0:e=a*Math.atan2(t.x,t.y)/Math.cos(i),t.x=E(e+(this.long0||0),this.over),t.y=tt(i),t}var Mu=["bonne","Bonne (Werner lat_1=90)"];const yu={init:pu,names:Mu},ur={OBLIQUE:{forward:wu,inverse:bu},TRANSVERSE:{forward:Iu,inverse:Lu}},Si={ROTATE:{o_alpha:"oAlpha",o_lon_c:"oLongC",o_lat_c:"oLatC"},NEW_POLE:{o_lat_p:"oLatP",o_lon_p:"oLongP"},NEW_EQUATOR:{o_lon_1:"oLong1",o_lat_1:"oLat1",o_lon_2:"oLong2",o_lat_2:"oLat2"}};function Pu(){if(this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.title=this.title||"General Oblique Transformation",this.isIdentity=Nr.includes(this.o_proj),!this.o_proj)throw new Error("Missing parameter: o_proj");if(this.o_proj==="ob_tran")throw new Error("Invalid value for o_proj: "+this.o_proj);const t=this.projStr.replace("+proj=ob_tran","").replace("+o_proj=","+proj=").trim(),e=Le(t);if(!e)throw new Error("Invalid parameter: o_proj. Unknown projection "+this.o_proj);e.long0=0,this.obliqueProjection=e;let i;const a=Object.keys(Si),s=o=>{if(typeof this[o]>"u")return;const f=parseFloat(this[o])*W;if(isNaN(f))throw new Error("Invalid value for "+o+": "+this[o]);return f};for(let o=0;o<a.length;o++){const f=a[o],l=Si[f],c=Object.entries(l);if(c.some(([h])=>typeof this[h]<"u")){i=l;for(let h=0;h<c.length;h++){const[m,g]=c[h],v=s(m);if(typeof v>"u")throw new Error("Missing parameter: "+m+".");this[g]=v}break}}if(!i)throw new Error("No valid parameters provided for ob_tran projection.");const{lamp:r,phip:n}=Nu(this,i);this.lamp=r,Math.abs(n)>x?(this.cphip=Math.cos(n),this.sphip=Math.sin(n),this.projectionType=ur.OBLIQUE):this.projectionType=ur.TRANSVERSE}function Cu(t){return this.projectionType.forward(this,t)}function Au(t){return this.projectionType.inverse(this,t)}function Nu(t,e){let i,a;if(e===Si.ROTATE){let s=t.oLongC,r=t.oLatC,n=t.oAlpha;if(Math.abs(Math.abs(r)-p)<=x)throw new Error("Invalid value for o_lat_c: "+t.o_lat_c+" should be < 90°");a=s+Math.atan2(-1*Math.cos(n),-1*Math.sin(n)*Math.sin(r)),i=Math.asin(Math.cos(r)*Math.sin(n))}else if(e===Si.NEW_POLE)a=t.oLongP,i=t.oLatP;else{let s=t.oLong1,r=t.oLat1,n=t.oLong2,o=t.oLat2,f=Math.abs(r);if(Math.abs(r)>p-x)throw new Error("Invalid value for o_lat_1: "+t.o_lat_1+" should be < 90°");if(Math.abs(o)>p-x)throw new Error("Invalid value for o_lat_2: "+t.o_lat_2+" should be < 90°");if(Math.abs(r-o)<x)throw new Error("Invalid value for o_lat_1 and o_lat_2: o_lat_1 should be different from o_lat_2");if(f<x)throw new Error("Invalid value for o_lat_1: o_lat_1 should be different from zero");a=Math.atan2(Math.cos(r)*Math.sin(o)*Math.cos(s)-Math.sin(r)*Math.cos(o)*Math.cos(n),Math.sin(r)*Math.cos(o)*Math.sin(n)-Math.cos(r)*Math.sin(o)*Math.sin(s)),i=Math.atan(-1*Math.cos(a-s)/Math.tan(r))}return{lamp:a,phip:i}}function wu(t,e){let{x:i,y:a}=e;i+=t.long0;const s=Math.cos(i),r=Math.sin(a),n=Math.cos(a);e.x=E(Math.atan2(n*Math.sin(i),t.sphip*n*s+t.cphip*r)+t.lamp),e.y=Math.asin(t.sphip*r-t.cphip*n*s);const o=t.obliqueProjection.forward(e);return t.isIdentity&&(o.x*=me,o.y*=me),o}function Iu(t,e){let{x:i,y:a}=e;i+=t.long0;const s=Math.cos(a),r=Math.cos(i);e.x=E(Math.atan2(s*Math.sin(i),Math.sin(a))+t.lamp),e.y=Math.asin(-1*s*r);const n=t.obliqueProjection.forward(e);return t.isIdentity&&(n.x*=me,n.y*=me),n}function bu(t,e){t.isIdentity&&(e.x*=W,e.y*=W);const i=t.obliqueProjection.inverse(e);let{x:a,y:s}=i;if(a<Number.MAX_VALUE){a-=t.lamp;const r=Math.cos(a),n=Math.sin(s),o=Math.cos(s);e.x=Math.atan2(o*Math.sin(a),t.sphip*o*r-t.cphip*n),e.y=Math.asin(t.sphip*n+t.cphip*o*r)}return e.x=E(e.x+t.long0),e}function Lu(t,e){t.isIdentity&&(e.x*=W,e.y*=W);const i=t.obliqueProjection.inverse(e);let{x:a,y:s}=i;if(a<Number.MAX_VALUE){const r=Math.cos(s);a-=t.lamp,e.x=Math.atan2(r*Math.sin(a),-1*Math.sin(s)),e.y=Math.asin(r*Math.cos(a))}return e.x=E(e.x+t.long0),e}var Ru=["General Oblique Transformation","General_Oblique_Transformation","ob_tran"];const Ou={init:Pu,forward:Cu,inverse:Au,names:Ru};function Du(t){t.Proj.projections.add(fi),t.Proj.projections.add(li),t.Proj.projections.add(Mf),t.Proj.projections.add(Lf),t.Proj.projections.add(Gf),t.Proj.projections.add(kf),t.Proj.projections.add(qf),t.Proj.projections.add(Jf),t.Proj.projections.add(rl),t.Proj.projections.add(ll),t.Proj.projections.add(Tl),t.Proj.projections.add(Nl),t.Proj.projections.add(Rl),t.Proj.projections.add(Vl),t.Proj.projections.add(Wl),t.Proj.projections.add(Kl),t.Proj.projections.add(eh),t.Proj.projections.add(ah),t.Proj.projections.add(uh),t.Proj.projections.add(vh),t.Proj.projections.add(Eh),t.Proj.projections.add(Ch),t.Proj.projections.add(Rh),t.Proj.projections.add(Uh),t.Proj.projections.add(Hh),t.Proj.projections.add(Yh),t.Proj.projections.add(iu),t.Proj.projections.add(ou),t.Proj.projections.add(cu),t.Proj.projections.add(_u),t.Proj.projections.add(yu),t.Proj.projections.add(Ou)}const jr=Object.assign(Vo,{defaultDatum:"WGS84",Proj:Le,WGS84:new Le("WGS84"),Point:yt,toPoint:Or,defs:te,nadgrid:Eo,transform:vi,mgrs:Bo,version:"__VERSION__"});Du(jr);const Fu="EPSG:4326",Gu="+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs",$r=jr(Fu,Gu);function qr(t){const[e,i]=t;if(e===void 0||i===void 0)throw new Error("proj4 returned an incomplete coordinate");return[e,i]}const[Uu,Vu]=qr($r.forward([Fi.longitudeDeg,Fi.latitudeDeg]));function Bu(t){return{easting:Uu+t.x,northing:Vu+t.z,height:t.y,epsg:25832}}function zu(t){const[e,i]=qr($r.inverse([t.easting,t.northing]));return{latitude:i,longitude:e,height:t.height}}function ku(t,e=Xe.laneSpacingM){return K.cruiseAltitudeM+t*e}function Hu(t,e){return Math.abs(t-e)<Xe.altitudeConflictM}const qt=1e-5,ft=(t,e)=>t.x*e.x+t.y*e.y,Ye=(t,e)=>t.x*e.y-t.y*e.x,at=t=>ft(t,t),Me=(t,e)=>({x:t.x-e.x,y:t.y-e.y}),qe=(t,e)=>({x:t.x+e.x,y:t.y+e.y}),q=(t,e)=>({x:t.x*e,y:t.y*e}),Kr=t=>{const e=Math.sqrt(at(t));return e<qt?{x:0,y:0}:{x:t.x/e,y:t.y/e}};function Wu(t,e,i,a){const s=Xu(t,i,a),r={value:{x:0,y:0}},n=Zr(s,a.maxSpeed,e,!1,r);return n<s.length&&$u(s,n,a.maxSpeed,r),r.value}function Xu(t,e,i){const a=1/i.timeHorizon,s=e.map(n=>({n,d:at(Me(n.position,t.position))})).filter(n=>n.d<=i.neighbourDist*i.neighbourDist&&n.d>qt).sort((n,o)=>n.d-o.d).slice(0,i.maxNeighbours).map(n=>n.n),r=[];for(const n of s){const o=Me(n.position,t.position),f=Me(t.velocity,n.velocity),l=at(o),c=t.radius+n.radius,u=c*c;let h,m;if(l>u){const g=Me(f,q(o,a)),v=at(g),_=ft(g,o);if(_<0&&_*_>u*v){const S=Math.sqrt(v),M=q(g,1/S);h={x:M.y,y:-M.x},m=q(M,c*a-S)}else{const S=Math.sqrt(l-u);Ye(o,g)>0?h=q({x:o.x*S-o.y*c,y:o.x*c+o.y*S},1/l):h=q({x:o.x*S+o.y*c,y:-o.x*c+o.y*S},-1/l);const M=ft(f,h);m=Me(q(h,M),f)}}else{const g=1/i.timeStep,v=Me(f,q(o,g)),_=Math.sqrt(at(v)),S=_<qt?{x:1,y:0}:q(v,1/_);h={x:S.y,y:-S.x},m=q(S,c*g-_)}r.push({point:qe(t.velocity,q(m,.5)),direction:h})}return r}function ju(t,e,i,a,s,r){const n=t[e];if(!n)return!1;const o=ft(n.point,n.direction),f=o*o+i*i-at(n.point);if(f<0)return!1;const l=Math.sqrt(f);let c=-o-l,u=-o+l;for(let h=0;h<e;h+=1){const m=t[h];if(!m)continue;const g=Ye(n.direction,m.direction),v=Ye(m.direction,Me(n.point,m.point));if(Math.abs(g)<=qt){if(v<0)return!1;continue}const _=v/g;if(g>=0?u=Math.min(u,_):c=Math.max(c,_),c>u)return!1}if(s)r.value=ft(a,n.direction)>0?qe(n.point,q(n.direction,u)):qe(n.point,q(n.direction,c));else{const h=ft(n.direction,Me(a,n.point));h<c?r.value=qe(n.point,q(n.direction,c)):h>u?r.value=qe(n.point,q(n.direction,u)):r.value=qe(n.point,q(n.direction,h))}return!0}function Zr(t,e,i,a,s){a?s.value=q(i,e):at(i)>e*e?s.value=q(Kr(i),e):s.value=i;for(let r=0;r<t.length;r+=1){const n=t[r];if(n&&Ye(n.direction,Me(n.point,s.value))>0){const o=s.value;if(!ju(t,r,e,i,a,s))return s.value=o,r}}return t.length}function $u(t,e,i,a){let s=0;for(let r=e;r<t.length;r+=1){const n=t[r];if(n&&Ye(n.direction,Me(n.point,a.value))>s){const o=[];for(let c=e;c<r;c+=1){const u=t[c];if(!u)continue;const h=Ye(n.direction,u.direction);let m;if(Math.abs(h)<=qt){if(ft(n.direction,u.direction)>0)continue;m=q(qe(n.point,u.point),.5)}else{const g=Ye(u.direction,Me(n.point,u.point))/h;m=qe(n.point,q(n.direction,g))}o.push({point:m,direction:Kr(Me(u.direction,n.direction))})}const f=a.value,l={x:-n.direction.y,y:n.direction.x};Zr(o,i,l,!0,a)<o.length&&(a.value=f),s=Ye(n.direction,Me(n.point,a.value))}}}function Yr(t,e){const i=e.x/2,a=e.y/2,s=e.z/2;return{min:{x:t.x-i,y:t.y-a,z:t.z-s},max:{x:t.x+i,y:t.y+a,z:t.z+s}}}function Wi(t,e){return{min:{x:t.x-e,y:t.y-e,z:t.z-e},max:{x:t.x+e,y:t.y+e,z:t.z+e}}}function Mi(t,e,i=.001){return Math.min(t.max.x,e.max.x)-Math.max(t.min.x,e.min.x)>i&&Math.min(t.max.y,e.max.y)-Math.max(t.min.y,e.min.y)>i&&Math.min(t.max.z,e.max.z)-Math.max(t.min.z,e.min.z)>i}function qu(t,e=.001){const i=new Set;for(let a=0;a<t.length;a+=1)for(let s=a+1;s<t.length;s+=1){const r=t[a],n=t[s];!r||!n||r.group!==void 0&&r.group===n.group||Mi(r.aabb,n.aabb,e)&&(i.add(r.id),i.add(n.id))}return i}class Ku{byId=new Map;ordered;constructor(e){for(const i of e){if(this.byId.has(i.id))throw new Error(`Duplicate component id: ${i.id}`);this.byId.set(i.id,i)}this.validateDependenciesExist(),this.assertAcyclic(),this.ordered=[...e].sort((i,a)=>i.sequenceIndex-a.sequenceIndex||i.id.localeCompare(a.id))}get(e){return this.byId.get(e)}dependenciesMet(e){return e.dependencies.every(i=>this.byId.get(i)?.state==="placed")}readyComponents(){return this.ordered.filter(e=>e.state==="unplaced"&&this.dependenciesMet(e))}get isComplete(){return this.ordered.every(e=>e.state==="placed")}reset(){for(const e of this.byId.values())e.state="unplaced"}validateDependenciesExist(){for(const e of this.byId.values())for(const i of e.dependencies)if(!this.byId.has(i))throw new Error(`Component "${e.id}" depends on unknown "${i}"`)}assertAcyclic(){const e=new Set,i=new Set,a=(s,r)=>{if(i.has(s))return;if(e.has(s))throw new Error(`Dependency cycle detected: ${[...r,s].join(" → ")}`);e.add(s);const n=this.byId.get(s);if(n)for(const o of n.dependencies)a(o,[...r,s]);e.delete(s),i.add(s)};for(const s of this.byId.keys())a(s,[])}}function Zu(t,e,i){const a=[],s=new Set(t);for(const r of e){const n=i(r);if(n<=0||s.size<n)continue;const o=[...s].map(f=>({drone:f,d:nt(f.position,r.depotPosition)})).sort((f,l)=>f.d-l.d||(f.drone.id<l.drone.id?-1:1)).slice(0,n).map(f=>f.drone);for(const f of o)s.delete(f);a.push({componentId:r.id,droneIds:o.map(f=>f.id)})}return a}const Qr=(t,e)=>({min:{x:Math.min(t.min.x,e.min.x),y:Math.min(t.min.y,e.min.y),z:Math.min(t.min.z,e.min.z)},max:{x:Math.max(t.max.x,e.max.x),y:Math.max(t.max.y,e.max.y),z:Math.max(t.max.z,e.max.z)}});function cr(t,e,i){const a=Wi(t,i.droneRadius);if(!e||!i.load)return a;const s={x:t.x,y:t.y-i.load.carryOffset,z:t.z};return Qr(a,Yr(s,i.load.dimensions))}function dr(t){const e=new Map,i=t.sampleStepS,a=t.startTime+t.horizonS;let s=t.startTime,r=t.startPosition,n=!1;const o=(f,l,c,u)=>{for(let h=Math.ceil(f/i)*i;h<=l+1e-9&&h<=a;h+=i)e.set(Math.round(h/i),cr(c,u,t))};for(const f of t.waypoints){if(s>a)break;const c=nt(r,f.position)/t.speedMps,u=s+c;for(let h=Math.ceil(s/i)*i;h<=u+1e-9&&h<=a;h+=i){const m=c>0?Math.min(1,(h-s)/c):1;e.set(Math.round(h/i),cr(Xi(r,f.position,m),n,t))}if(s=u,r=f.position,f.action==="pickup"?n=!0:f.action==="place"&&(n=!1),f.pauseMs&&f.pauseMs>0){const h=s+f.pauseMs/1e3;o(s,h,r,n),s=h}}return e}function mr(t){let e=null;for(const i of t.values())e=e?Qr(e,i):i;return e}function Yu(t,e,i,a=0){const[s,r]=t.size<=e.size?[t,e]:[e,t];for(const[n,o]of s)for(let f=-a;f<=a;f+=1){const l=r.get(n+f);if(l&&Mi(o,l,-i))return!0}return!1}class Qu{constructor(e=0){this.bucketBuffer=e}active=new Map;wouldConflict(e,i,a){const s=mr(i);if(!s)return!1;for(const[r,n]of this.active)if(r!==e&&!(!n.bounds||!Mi(s,n.bounds,-a))&&Yu(i,n.path,a,this.bucketBuffer))return!0;return!1}reserve(e,i){this.active.set(e,{path:i,bounds:mr(i)})}release(e){this.active.delete(e)}has(e){return this.active.has(e)}get size(){return this.active.size}}function Ju(t,e,i,a){return e<=1?[{x:t.x,y:a,z:t.z}]:Array.from({length:e},(s,r)=>{const n=2*Math.PI*r/e;return{x:t.x+i*Math.cos(n),y:a,z:t.z+i*Math.sin(n)}})}const ec=.3;function yi(t){return K.radiusM+t.dimensions.y/2+ec}function Jr(t,e){const i=e,{depotPosition:a,targetPosition:s}=t,r=yi(t);return[{position:{x:a.x,y:i,z:a.z}},{position:{x:a.x,y:a.y+r,z:a.z},action:"pickup",pauseMs:K.hoverPauseMs},{position:{x:a.x,y:i,z:a.z}},{position:{x:s.x,y:i,z:s.z}},{position:{x:s.x,y:s.y+r,z:s.z},action:"place",pauseMs:K.hoverPauseMs},{position:{x:s.x,y:i,z:s.z}}]}function ea(t,e){return[{position:{x:t.x,y:e,z:t.z}},{position:{x:t.x,y:t.y,z:t.z}}]}const tc=.12;class ic{constructor(e,i,a){this.component=e,this.members=i,this.componentMeshes=a,this.k=i.length,this.offset=yi(e),this.loadCentre={...e.depotPosition},this.anchors=i.map(r=>({...r.position})),e.state="claimed",this.componentMeshes.applyState(e);const s=this.statusFor("ascend");for(const r of i)r.bindToGroup(s)}phase="ascend";loadCentre;descendCursor=0;anchors;k;offset;cruise=K.cruiseAltitudeM;get isDone(){return this.phase==="done"}update(e,i){const a=i,s=i*ni.carrierServoFactor;switch(this.phase){case"ascend":this.runAscend(e,s);break;case"gather":this.runGather(e,s);break;case"descend":this.runDescend(e,s);break;case"lift":this.runFlyTo({x:this.loadCentre.x,y:this.cruise,z:this.loadCentre.z},"transit",e,a,s);break;case"transit":this.runFlyTo({x:this.component.targetPosition.x,y:this.cruise,z:this.component.targetPosition.z},"lower",e,a,s);break;case"lower":this.runFlyTo(this.component.targetPosition,"drop",e,a,s);break;case"drop":this.runDrop();break}}release(){for(const e of this.members)e.releaseFromGroup()}runAscend(e,i){let a=!0;this.members.forEach((s,r)=>{const n=this.anchors[r]??this.loadCentre;s.steerTo({x:n.x,y:this.stackAltitude(r),z:n.z},e,i)||(a=!1)}),a&&this.advanceTo("gather")}runGather(e,i){let a=!0;this.members.forEach((s,r)=>{s.steerTo(this.stackSlot(r),e,i)||(a=!1)}),a&&(this.descendCursor=0,this.advanceTo("descend"))}runDescend(e,i){const a=this.slotsAt(this.loadCentre);let s=!0;this.members.forEach((r,n)=>{const o=a[n]??this.loadCentre;if(n<=this.descendCursor){const f=r.steerTo(o,e,i);n===this.descendCursor&&f&&(this.descendCursor+=1),f||(s=!1)}else r.steerTo(this.stackSlot(n),e,i),s=!1}),this.descendCursor>=this.k&&s&&(this.component.state="in-transit",this.componentMeshes.applyState(this.component),this.advanceTo("lift"))}runFlyTo(e,i,a,s,r){this.moveLoadToward(e,a,s),this.renderLoad();const n=this.slotsAt(this.loadCentre);let o=!0;this.members.forEach((f,l)=>{f.steerTo(n[l]??this.loadCentre,a,r)||(o=!1)}),nt(this.loadCentre,e)<=tc&&o&&this.advanceTo(i)}runDrop(){const e=this.componentMeshes.getMesh(this.component.id),i=this.component.targetPosition;e&&e.position.set(i.x,i.y,i.z),this.component.state="placed",this.componentMeshes.applyState(this.component),this.componentMeshes.flashPlacement(this.component),this.phase="done"}slotsAt(e){return Ju(e,this.k,ni.formationRadiusM,e.y+this.offset)}stackAltitude(e){return this.cruise+e*ni.gatherStackSpacingM}stackSlot(e){const i=this.component.depotPosition;return{x:i.x,y:this.stackAltitude(e),z:i.z}}advanceTo(e){this.phase=e,e!=="done"&&this.setStatus(e)}moveLoadToward(e,i,a){const s=nt(this.loadCentre,e),r=a*i;this.loadCentre=s<=r?{...e}:Xi(this.loadCentre,e,r/s)}renderLoad(){const e=this.componentMeshes.getMesh(this.component.id);e&&e.position.set(this.loadCentre.x,this.loadCentre.y,this.loadCentre.z)}setStatus(e){const i=this.statusFor(e);for(const a of this.members)a.setGroupStatus(i)}statusFor(e){return`${e==="ascend"||e==="gather"||e==="descend"?"Rendezvous":e==="lift"?"Lifting":e==="lower"||e==="drop"?"Placing":"Carrying"} ${this.component.id} (×${this.k})`}}const He={x:0,y:0},sc=.2,rc=.05;class ac{constructor(e,i,a,s,r){this.id=e,this.drone=i,this.componentMeshes=a,this.home=s,this.cruiseAltitude=r}assignment=null;carried=null;returning=!1;atRest=!0;waypoints=[];waypointIndex=0;pauseRemainingMs=0;lastHorizVel=He;stuckMs=0;grouped=!1;groupStatus=null;get isAvailable(){return this.assignment===null&&!this.grouped}get isGrouped(){return this.grouped}get isParked(){return this.atRest&&!this.grouped&&this.assignment===null}get isReturning(){return this.returning}get isHovering(){return this.assignment===null&&!this.grouped&&!this.returning&&!this.atRest}get laneAltitude(){return this.cruiseAltitude}get homeSlot(){return this.home}get needsReturnHome(){return this.assignment===null&&!this.grouped&&!this.returning&&!this.atRest}get isMoving(){return!this.grouped&&this.pauseRemainingMs<=0&&this.waypoints[this.waypointIndex]!==void 0}get position(){return this.drone.getPosition()}get assignedComponent(){return this.assignment}get carriedComponent(){return this.carried}setClash(e){this.drone.setClash(e)}get avoidance(){const e=this.position;return{position:{x:e.x,y:e.z},velocity:this.lastHorizVel,radius:K.radiusM,altitude:e.y}}get status(){return this.grouped?this.groupStatus??"Cooperative carry":this.carried?`Carrying ${this.carried.id}`:this.assignment?`Fetching ${this.assignment.id}`:this.returning?"Returning":"Idle"}assign(e){this.assignment=e,this.returning=!1,this.atRest=!1,e.state="claimed",this.componentMeshes.applyState(e),this.setPath(Jr(e,this.cruiseAltitude))}returnHome(){this.returning=!0,this.atRest=!1,this.setPath(ea(this.home,this.cruiseAltitude))}bindToGroup(e){this.grouped=!0,this.groupStatus=e,this.assignment=null,this.carried=null,this.returning=!1,this.atRest=!1,this.waypoints=[],this.waypointIndex=0,this.pauseRemainingMs=0,this.lastHorizVel=He,this.stuckMs=0}setGroupStatus(e){this.groupStatus=e}steerTo(e,i,a){const s=this.position,r=nt(s,e),n=a*i,o=r<=n?e:Xi(s,e,n/r);return this.drone.setPosition(o),this.lastHorizVel=i>0?{x:(o.x-s.x)/i,y:(o.z-s.z)/i}:He,nt(o,e)<=ni.slotToleranceM}releaseFromGroup(){this.grouped=!1,this.groupStatus=null,this.assignment=null,this.atRest=!1,this.lastHorizVel=He}preferredVelocity(e){const i=this.waypoints[this.waypointIndex];if(!i||this.pauseRemainingMs>0)return He;const a=this.position,s=i.position.x-a.x,r=i.position.z-a.z,n=Math.hypot(s,r);if(n<rc)return He;const o={x:s/n,y:r/n};let f={x:o.x*e,y:o.y*e};if(this.stuckMs>Xe.stuckTimeoutMs){const l={x:-o.y,y:o.x},c=e*Xe.nudgeFraction;f={x:f.x+l.x*c,y:f.y+l.y*c}}return f}update(e,i,a){if(this.grouped)return!1;if(this.pauseRemainingMs>0)return this.pauseRemainingMs-=e*1e3,this.followCarried(),this.lastHorizVel=He,!1;const s=this.waypoints[this.waypointIndex];if(!s)return this.onPathFinished();const r=this.position,n=nt(r,s.position),o=i*e;if(n<=Math.max(o,sc)){this.drone.setPosition(s.position),this.followCarried(),this.lastHorizVel=He,this.stuckMs=0;let c=!1;return s.action==="pickup"?(this.pickup(),c=!0):s.action==="place"&&(this.place(),c=!0),s.pauseMs&&(this.pauseRemainingMs=s.pauseMs),this.waypointIndex+=1,c}const f=s.position.y-r.y,l=Math.max(-o,Math.min(o,f));return this.drone.setPosition({x:r.x+a.x*e,y:r.y+l,z:r.z+a.y*e}),this.followCarried(),this.lastHorizVel=a,this.updateStuckWatchdog(a,i,s,e),!1}focus(){return this.carried?this.carried.targetPosition:this.assignment?this.assignment.depotPosition:{x:Et.x,y:Et.y+1.5,z:Et.z}}reset(){this.assignment=null,this.carried=null,this.grouped=!1,this.groupStatus=null,this.returning=!1,this.atRest=!0,this.waypoints=[],this.waypointIndex=0,this.pauseRemainingMs=0,this.lastHorizVel=He,this.stuckMs=0,this.drone.setPosition(this.home)}setPath(e){this.waypoints=e,this.waypointIndex=0,this.pauseRemainingMs=0,this.stuckMs=0}updateStuckWatchdog(e,i,a,s){const r=this.position,n=Math.hypot(a.position.x-r.x,a.position.z-r.z),o=Math.hypot(e.x,e.y);n>.3&&o<i*Xe.stuckSpeedFraction?this.stuckMs+=s*1e3:this.stuckMs=0}onPathFinished(){return this.lastHorizVel=He,this.assignment?(this.assignment=null,!0):this.returning?(this.returning=!1,this.atRest=!0,!0):!1}pickup(){const e=this.assignment;e&&(e.state="in-transit",this.componentMeshes.applyState(e),this.carried=e)}place(){const e=this.carried;if(!e)return;const i=this.componentMeshes.getMesh(e.id);i&&i.position.set(e.targetPosition.x,e.targetPosition.y,e.targetPosition.z),e.state="placed",this.componentMeshes.applyState(e),this.componentMeshes.flashPlacement(e),this.carried=null}followCarried(){const e=this.carried;if(!e)return;const i=this.componentMeshes.getMesh(e.id);if(!i)return;const a=this.position;i.position.set(a.x,a.y-yi(e),a.z)}}const Li={x:0,y:0};class Ri{constructor(e,i,a,s=pr){if(this.componentMeshes=i,this.components=a,e.length===0)throw new Error("Fleet requires at least one drone");this.graph=new Ku(a);const r=e.length,n=s==="lanes"?Xe.laneSpacingM:0;this.agents=e.map((o,f)=>new ac(`drone-${f+1}`,o,i,Sr(f,r),ku(f,n))),this.graph.reset(),this.componentMeshes.resetAll(this.components),this.clearClashHighlight(),this.assignIdleAgents()}graph;agents;groups=[];clashIds=[];reservations=new Qu(Math.round(dt.timeBufferS/dt.sampleStepS));clock=0;listeners=new Set;speedMps=K.defaultSpeedMps;running=!0;get isComplete(){return this.graph.isComplete}get isRunning(){return this.running}get droneCount(){return this.agents.length}get orderedComponents(){return this.graph.ordered}get telemetry(){const e=!this.running;return this.agents.map(i=>({id:i.id,position:i.position,status:e?"Paused":i.status}))}get summary(){return this.running?this.isComplete?"Assembly complete":`${this.components.filter(i=>i.state==="placed").length}/${this.components.length} placed`:"Paused"}get clashes(){return this.clashIds}get geoReadout(){const e=Bu(this.lead.position);return{originLabel:Fi.label,utm:e,geo:zu(e)}}get dronePosition(){return this.lead.position}get droneFocus(){return this.lead.focus()}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}play(){this.running||(this.running=!0,this.emit())}pause(){this.running&&(this.running=!1,this.emit())}setSpeed(e){this.speedMps=Math.min(K.maxSpeedMps,Math.max(K.minSpeedMps,e))}reset(){this.groups=[],this.releaseAllReservations(),this.clock=0,this.graph.reset(),this.componentMeshes.resetAll(this.components);for(const e of this.agents)e.reset();this.clearClashHighlight(),this.running=!0,this.assignIdleAgents(),this.emit()}clearClashHighlight(){this.clashIds=[];for(const e of this.agents)e.setClash(!1)}update(e){if(!this.running)return;this.clock+=e;const i=this.agents.map(n=>n.avoidance),a=this.agents.map((n,o)=>n.isMoving?this.resolveVelocity(n,o,i,e):Li);let s=!1;this.agents.forEach((n,o)=>{n.update(e,this.speedMps,a[o]??Li)&&(s=!0)});const r=[];for(const n of this.groups)n.update(e,this.speedMps),n.isDone?(n.release(),s=!0):r.push(n);this.groups=r,this.releaseStaleReservations(),this.assignIdleAgents()&&(s=!0),this.dispatchReturns()&&(s=!0),this.detectClashes(),s&&this.emit()}detectClashes(){const e=[];for(const a of this.components){if(a.state==="unplaced")continue;const s=this.componentMeshes.getMesh(a.id);if(!s)continue;const r={x:s.position.x,y:s.position.y,z:s.position.z};e.push({id:a.id,aabb:Yr(r,a.dimensions)})}for(const a of this.agents)e.push({id:a.id,aabb:Wi(a.position,K.radiusM)});const i=qu(e,va);this.componentMeshes.setClash(i,this.components);for(const a of this.agents)a.setClash(i.has(a.id));this.clashIds=[...i].sort()}resolveVelocity(e,i,a,s){const r=a[i];if(!r)return Li;const n=a.filter((f,l)=>l!==i&&Hu(r.altitude,f.altitude)),o={timeHorizon:Xe.timeHorizonS,timeStep:s,maxSpeed:this.speedMps,neighbourDist:Xe.neighbourDistM,maxNeighbours:Xe.maxNeighbours};return Wu(r,e.preferredVelocity(this.speedMps),n,o)}get lead(){const e=this.agents[0];if(!e)throw new Error("Fleet has no drones");return e}emit(){for(const e of this.listeners)e()}carrierCount(e){return Math.min(e.requiredCarriers,this.agents.length)}assignIdleAgents(){if(this.groups.length>0)return!1;const e=this.agents.filter(n=>n.isAvailable);if(e.length===0)return!1;const i=this.graph.readyComponents();if(i.length===0)return!1;const a=e.map(n=>({id:n.id,position:n.position})),s=Zu(a,i,n=>this.carrierCount(n));let r=!1;for(const{componentId:n,droneIds:o}of s){const f=this.graph.get(n);if(!f)continue;const l=o.map(u=>this.agents.find(h=>h.id===u)).filter(u=>u!==void 0);if(l.length!==o.length)continue;const c=l[0];if(c){if(l.length===1){const u=this.predictCarry(c,f);if(!this.canDepart(c.id,u))continue;c.assign(f),this.reservations.reserve(c.id,u),r=!0}else if(this.airspaceClear()){this.groups.push(new ic(f,l,this.componentMeshes)),r=!0;break}}}return r}dispatchReturns(){if(this.groups.length>0)return!1;let e=!1;for(const i of this.agents){if(!i.needsReturnHome)continue;const a=this.predictReturn(i);this.canDepart(i.id,a)&&(i.returnHome(),this.reservations.reserve(i.id,a),e=!0)}return e}predictCarry(e,i){return dr({startPosition:e.position,waypoints:Jr(i,e.laneAltitude),speedMps:this.speedMps,droneRadius:K.radiusM,startTime:this.clock,sampleStepS:dt.sampleStepS,horizonS:dt.horizonS,load:{dimensions:i.dimensions,carryOffset:yi(i)}})}predictReturn(e){return dr({startPosition:e.position,waypoints:ea(e.homeSlot,e.laneAltitude),speedMps:this.speedMps,droneRadius:K.radiusM,startTime:this.clock,sampleStepS:dt.sampleStepS,horizonS:dt.horizonS})}canDepart(e,i){if(this.reservations.wouldConflict(e,i,ls))return!1;for(const a of this.agents){if(a.id===e||!a.isHovering)continue;const s=Wi(a.position,K.radiusM);for(const r of i.values())if(Mi(r,s,-ls))return!1}return!0}airspaceClear(){return this.reservations.size===0&&!this.agents.some(e=>e.isHovering)}releaseStaleReservations(){for(const e of this.agents)e.assignedComponent!==null||e.isReturning||this.reservations.release(e.id)}releaseAllReservations(){for(const e of this.agents)this.reservations.release(e.id)}}const gr={lanes:"🛫 Lanes (parallel)",corridor:"🚦 Corridor (1 at a time)"},nc="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 rounded-xl bg-neutral-900/80 px-5 py-3 text-sm text-neutral-100 shadow-lg ring-1 ring-white/10 backdrop-blur",ai="rounded-md bg-neutral-700/80 px-3 py-1.5 font-medium hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-sky-400";class oc{root;playPauseButton;viewButton;modeButton;speedValue;countValue;mode;constructor(e,i,a,s){this.mode=s,this.root=document.createElement("div"),this.root.className=nc,this.playPauseButton=document.createElement("button"),this.playPauseButton.className=ai,this.playPauseButton.textContent="⏸ Pause",this.playPauseButton.addEventListener("click",()=>e.onPlayPause());const r=document.createElement("button");r.className=ai,r.textContent="↺ Reset",r.addEventListener("click",()=>e.onReset());const n=document.createElement("label");n.className="flex items-center gap-2";const o=document.createElement("span");o.className="text-neutral-400",o.textContent="Speed";const f=document.createElement("input");f.type="range",f.setAttribute("aria-label","Flight speed (metres per second)"),f.min=String(i.min),f.max=String(i.max),f.step="0.5",f.value=String(i.value),f.className="accent-sky-400",this.speedValue=document.createElement("span"),this.speedValue.className="w-16 tabular-nums text-neutral-300",this.speedValue.textContent=`${i.value.toFixed(1)} m/s`,f.addEventListener("input",()=>{const h=Number(f.value);this.speedValue.textContent=`${h.toFixed(1)} m/s`,e.onSpeed(h)});const l=document.createElement("label");l.className="flex items-center gap-2";const c=document.createElement("span");c.className="text-neutral-400",c.textContent="Drones";const u=document.createElement("input");u.type="range",u.setAttribute("aria-label","Number of drones"),u.min=String(a.min),u.max=String(a.max),u.step="1",u.value=String(a.value),u.className="accent-sky-400",this.countValue=document.createElement("span"),this.countValue.className="w-4 tabular-nums text-neutral-300",this.countValue.textContent=String(a.value),u.addEventListener("input",()=>{this.countValue.textContent=u.value}),u.addEventListener("change",()=>{e.onDroneCount(Number(u.value))}),this.viewButton=document.createElement("button"),this.viewButton.className=ai,this.viewButton.textContent="🚁 Drone view",this.viewButton.addEventListener("click",()=>e.onToggleView()),this.modeButton=document.createElement("button"),this.modeButton.className=ai,this.modeButton.setAttribute("aria-label","Deconfliction mode"),this.modeButton.textContent=gr[this.mode],this.modeButton.addEventListener("click",()=>{e.onMode(this.mode==="lanes"?"corridor":"lanes")}),n.append(o,f,this.speedValue),l.append(c,u,this.countValue),this.root.append(this.playPauseButton,r,this.viewButton,this.modeButton,l,n)}mount(e){e.appendChild(this.root)}update(e){this.playPauseButton.textContent=e?"⏸ Pause":"▶ Play"}updateView(e){this.viewButton.textContent=e==="drone"?"🎥 Orbit view":"🚁 Drone view"}updateMode(e){this.mode=e,this.modeButton.textContent=gr[e]}}function ta(t){return t.id.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function fc(t){const e=i=>i.toFixed(1);return`(${e(t.x)}, ${e(t.y)}, ${e(t.z)}) m`}function lc(t,e){const i=t>=0?"N":"S",a=e>=0?"E":"W";return`${Math.abs(t).toFixed(6)}°${i}, ${Math.abs(e).toFixed(6)}°${a}`}function hc(t,e,i){return`${Math.round(t)} E  ${Math.round(e)} N (EPSG:${i})`}function vr(t){switch(t){case"placed":return"✓";case"in-transit":return"→";case"claimed":return"◎";case"unplaced":return"○"}}const uc="absolute bottom-4 left-4 rounded-xl bg-neutral-900/80 px-4 py-3 font-mono text-xs text-neutral-100 shadow-lg ring-1 ring-white/10 backdrop-blur",Oi=t=>t.toFixed(1).padStart(6);class cc{root;summary;geoOrigin;geoLine;clash;list;rows=[];constructor(){this.root=document.createElement("div"),this.root.className=uc;const e=document.createElement("div");e.className="mb-1 text-[11px] uppercase tracking-wider text-neutral-400",e.textContent="Fleet telemetry",this.summary=document.createElement("div"),this.summary.className="mb-2 text-neutral-300",this.geoOrigin=document.createElement("div"),this.geoOrigin.className="text-[11px] text-emerald-300/90",this.geoLine=document.createElement("div"),this.geoLine.className="mb-2 text-[11px] tabular-nums text-emerald-300/70",this.clash=document.createElement("div"),this.clash.className="mb-2 hidden font-semibold text-red-400",this.list=document.createElement("div"),this.list.className="space-y-2",this.root.append(e,this.summary,this.geoOrigin,this.geoLine,this.clash,this.list)}mount(e){e.appendChild(this.root)}update(e,i,a=[],s){this.summary.textContent=e,s&&(this.geoOrigin.textContent=`⌖ Origin: ${s.originLabel}`,this.geoLine.textContent=`lead ${lc(s.geo.latitude,s.geo.longitude)}  ·  ${hc(s.utm.easting,s.utm.northing,s.utm.epsg)}`),a.length>0?(this.clash.textContent=`⚠ Clash: ${a.join(", ")}`,this.clash.classList.remove("hidden")):(this.clash.textContent="",this.clash.classList.add("hidden")),this.syncRowCount(i.length),i.forEach((r,n)=>{const o=this.rows[n];if(!o)return;const f=r.position;o.coords.textContent=`${r.id}  x ${Oi(f.x)}  y ${Oi(f.y)}  z ${Oi(f.z)}`,o.status.textContent=r.status})}syncRowCount(e){for(;this.rows.length<e;)this.rows.push(this.createRow());for(;this.rows.length>e;)this.rows.pop()?.root.remove()}createRow(){const e=document.createElement("div"),i=document.createElement("span");i.className="block tabular-nums text-sky-300";const a=document.createElement("span");return a.className="block text-neutral-400",e.append(i,a),this.list.appendChild(e),{root:e,coords:i,status:a}}}const dc="absolute right-4 top-4 w-64 rounded-xl bg-neutral-900/80 p-4 text-sm text-neutral-100 shadow-lg ring-1 ring-white/10 backdrop-blur";class mc{root;title;body;shown=null;constructor(){this.root=document.createElement("div"),this.root.className=`${dc} hidden`,this.title=document.createElement("h2"),this.title.className="mb-2 font-semibold",this.body=document.createElement("dl"),this.body.className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs",this.root.append(this.title,this.body)}mount(e){e.appendChild(this.root)}show(e){this.shown=e,this.title.textContent=ta(e),this.body.replaceChildren(this.row("ID",e.id),this.row("Type",e.type),this.row("Sequence",`#${e.sequenceIndex+1}`),this.row("Target",fc(e.targetPosition)),this.stateRow(e)),this.root.classList.remove("hidden")}hide(){this.shown=null,this.root.classList.add("hidden")}refresh(){this.shown&&this.show(this.shown)}row(e,i){const a=document.createDocumentFragment(),s=document.createElement("dt");s.className="text-neutral-400",s.textContent=e;const r=document.createElement("dd");return r.className="text-neutral-100",r.textContent=i,a.append(s,r),a}stateRow(e){const i=this.row("State",e.state),a=i.lastChild;return a.style.color=Bt[e.state],a.style.fontWeight="600",i}}const gt={title:"Drone Assembly Path Planner",tagline:"An interactive 3D prototype of the spatial and computational layer of drone-assisted building assembly. A fleet of autonomous drones builds a structure component by component — respecting how the parts stack and staying clear of one another and the rising building.",features:[{heading:"Dependency-aware sequencing",body:"Each part is placed only once the parts it rests on are in place."},{heading:"Multi-drone coordination",body:"A configurable fleet works in parallel; heavy parts are lifted cooperatively."},{heading:"Collision-free scheduling",body:"Flights are deconflicted in space-time; any real clash is flagged in red."},{heading:"Georeferenced",body:"Positions are reported in a real-world coordinate system (UTM / latitude-longitude)."}],hint:"Use the controls along the bottom to play or pause, change speed, fleet size, deconfliction mode, and camera. Hover a component for its details.",cta:"Start the demo"},gc="pointer-events-auto absolute inset-0 z-50 flex items-center justify-center bg-neutral-950/70 p-6 backdrop-blur-sm transition-opacity duration-300",vc="max-w-lg rounded-2xl bg-neutral-900/95 p-7 text-neutral-100 shadow-2xl ring-1 ring-white/10";class _c{root;onDismiss;dismissed=!1;onKeydown=e=>{e.key==="Escape"&&this.dismiss()};constructor(e){this.onDismiss=e,this.root=document.createElement("div"),this.root.className=gc,this.root.setAttribute("role","dialog"),this.root.setAttribute("aria-modal","true"),this.root.setAttribute("aria-label",`${gt.title} — introduction`);const i=document.createElement("div");i.className=vc;const a=document.createElement("h1");a.className="text-xl font-semibold tracking-tight",a.textContent=gt.title;const s=document.createElement("p");s.className="mt-2 text-sm leading-relaxed text-neutral-300",s.textContent=gt.tagline;const r=document.createElement("ul");r.className="mt-4 space-y-2 text-sm";for(const f of gt.features){const l=document.createElement("li");l.className="flex gap-2";const c=document.createElement("span");c.className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400",c.setAttribute("aria-hidden","true");const u=document.createElement("span"),h=document.createElement("span");h.className="font-medium text-neutral-100",h.textContent=`${f.heading} — `;const m=document.createElement("span");m.className="text-neutral-400",m.textContent=f.body,u.append(h,m),l.append(c,u),r.appendChild(l)}const n=document.createElement("p");n.className="mt-4 text-xs leading-relaxed text-neutral-500",n.textContent=gt.hint;const o=document.createElement("button");o.className="mt-6 w-full rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300",o.textContent=gt.cta,o.addEventListener("click",()=>this.dismiss()),i.append(a,s,r,n,o),this.root.appendChild(i),this.root.addEventListener("click",f=>{f.target===this.root&&this.dismiss()}),document.addEventListener("keydown",this.onKeydown),queueMicrotask(()=>o.focus())}mount(e){e.appendChild(this.root)}dismiss(){if(this.dismissed)return;this.dismissed=!0,document.removeEventListener("keydown",this.onKeydown),this.onDismiss?.(),this.root.classList.add("opacity-0");const e=()=>this.root.remove();this.root.addEventListener("transitionend",e,{once:!0}),setTimeout(e,350)}}const pc=[["placed","placed"],["in-transit","in transit"],["claimed","reserved"],["unplaced","unplaced"]],xc="absolute left-4 top-4 w-60 rounded-xl bg-neutral-900/80 p-4 text-sm text-neutral-100 shadow-lg ring-1 ring-white/10 backdrop-blur";class Sc{root;list;constructor(){this.root=document.createElement("div"),this.root.className=xc;const e=document.createElement("h2");e.className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400",e.textContent="Assembly Sequence",this.list=document.createElement("ol"),this.list.className="space-y-1",this.root.append(e,this.list,this.buildLegend())}buildLegend(){const e=document.createElement("div");e.className="mt-3 flex flex-wrap gap-x-3 gap-y-1 border-t border-white/10 pt-2 text-[11px] text-neutral-400";for(const[i,a]of pc){const s=document.createElement("span");s.className="inline-flex items-center gap-1";const r=document.createElement("span");r.style.color=Bt[i],r.textContent=vr(i);const n=document.createElement("span");n.textContent=a,s.append(r,n),e.appendChild(s)}return e}mount(e){e.appendChild(this.root)}update(e){this.list.replaceChildren(...e.map(i=>this.renderRow(i,i.state==="claimed"||i.state==="in-transit")))}renderRow(e,i){const a=Bt[e.state],s=document.createElement("li");s.className="flex items-center gap-2 rounded px-2 py-1 "+(i?"bg-white/10 ring-1 ring-white/15":"");const r=document.createElement("span");r.className="w-4 text-right tabular-nums text-neutral-500",r.textContent=String(e.sequenceIndex+1);const n=document.createElement("span");n.className="inline-block h-2.5 w-2.5 shrink-0 rounded-full",n.style.backgroundColor=a;const o=document.createElement("span");o.className="flex-1 truncate",o.textContent=ta(e);const f=document.createElement("span");return f.className="tabular-nums",f.style.color=a,f.textContent=vr(e.state),s.append(r,n,o,f),s}}function Ec(){const t=document.getElementById("render-canvas");if(!(t instanceof HTMLCanvasElement))throw new Error("#render-canvas not found or is not a <canvas> element");const e=new ma(t,!0,{preserveDrawingBuffer:!0,stencil:!0,antialias:!0}),i=document.getElementById("ui-root");if(!(i instanceof HTMLElement))throw new Error("#ui-root not found");const a=Pa(),s=new wn(e,t,a);let r=pr,n=K.defaultSpeedMps,o=new Ri(s.drones,s.components,a,r);const f=new Sc,l=new mc,c=new cc,u=()=>{f.update(o.orderedComponents),v.update(o.isRunning),l.refresh()},h=()=>{o.setSpeed(n),o.onChange(u),u()},m=M=>{const A=s.setDroneCount(M);o=new Ri(A,s.components,a,r),h()},g=M=>{r=M,o=new Ri(s.drones,s.components,a,r),h(),v.updateMode(M)},v=new oc({onPlayPause:()=>o.isRunning?o.pause():o.play(),onReset:()=>o.reset(),onSpeed:M=>{n=M,o.setSpeed(M)},onToggleView:()=>{s.setCameraView(s.cameraView==="drone"?"orbit":"drone"),v.updateView(s.cameraView)},onDroneCount:m,onMode:g},{min:K.minSpeedMps,max:K.maxSpeedMps,value:K.defaultSpeedMps},{min:Ke.minCount,max:Ke.maxCount,value:o.droneCount},r);f.mount(i),l.mount(i),c.mount(i),v.mount(i),o.pause(),u(),new _c(()=>o.play()).mount(i),o.onChange(u),u();const _=new Map(a.map(M=>[M.id,M]));In(s.scene,M=>{const A=M?_.get(M):void 0;A?l.show(A):l.hide()}),e.runRenderLoop(()=>{const M=Math.min(e.getDeltaTime()/1e3,.1);o.update(M),c.update(o.summary,o.telemetry,o.clashes,o.geoReadout),s.syncDroneCamera(o.dronePosition,o.droneFocus),s.scene.render()});const S=()=>e.resize();window.addEventListener("resize",S)}Ec();
//# sourceMappingURL=index-BsI2yfYG.js.map
