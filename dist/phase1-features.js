const sectorUpdates=[
 {id:1,type:'Policy',title:'Battery swapping guidelines updated',summary:'A concise founder brief on operational implications for EV companies.',date:'Today',expires:'28 Oct 2026',source:'YourNest research desk'},
 {id:2,type:'Market',title:'India EV financing activity — Q3 pulse',summary:'Curated funding patterns and strategic signals for growth-stage mobility companies.',date:'Yesterday',expires:'27 Oct 2026',source:'Approved public sources'},
 {id:3,type:'Regulatory',title:'Data-protection readiness for connected vehicles',summary:'A practical checklist for product and compliance leaders.',date:'24 Sep',expires:'24 Oct 2026',source:'YourNest legal network'}
];
const industryResources=[
 {id:11,cat:'Industry',sub:'Market Research',title:'Industry Market Sizing Workbook',desc:'A guided TAM, SAM and SOM template with source notes and assumption tracking.',type:'XLSX',review:'Reviewed 26 Sep 2026'},
 {id:12,cat:'Industry',sub:'Regulatory & Policy',title:'Regulatory Impact Assessment',desc:'A structured template to translate policy changes into business actions, owners and deadlines.',type:'DOCX',review:'Reviewed 25 Sep 2026'},
 {id:13,cat:'Industry',sub:'Competitive Landscape',title:'Competitive Landscape Map',desc:'A comparison template covering segments, positioning, capabilities, pricing and differentiators.',type:'XLSX',review:'Reviewed 24 Sep 2026'},
 {id:14,cat:'Industry',sub:'Industry Benchmarks',title:'Operating Benchmark Scorecard',desc:'A configurable scorecard for comparing relevant operating indicators with sector reference points.',type:'XLSX',review:'Reviewed 23 Sep 2026'},
 {id:15,cat:'Industry',sub:'Ecosystem & Partnerships',title:'Industry Ecosystem Mapping Canvas',desc:'A practical canvas for mapping regulators, partners, associations, suppliers and strategic channels.',type:'PPTX',review:'Reviewed 22 Sep 2026'}
];
resources.push.apply(resources,industryResources);
var industrySub='All';
function industryResourceCard(r){
 return '<article class="card resource-card"><span class="tag">'+(r.sub?r.sub.toUpperCase():r.cat.toUpperCase())+' · '+r.type+'</span><h3>'+r.title+'</h3><p>'+r.desc+'</p><div class="meta">'+r.review+'</div><div class="card-actions"><button class="btn primary" data-action="download" data-id="'+r.id+'">'+svg('download')+' Download</button><button class="btn ghost" data-action="resource-detail" data-id="'+r.id+'">View details</button></div></article>';
}
function industryResourcesPage(){
 var cats=['All','Legal','Finance','Hiring','Operations','Compliance','Fundraising','Industry'];
 var subs=['All','Market Research','Regulatory & Policy','Competitive Landscape','Industry Benchmarks','Ecosystem & Partnerships'];
 var list=state.resourceFilter==='All'?resources:resources.filter(function(r){return r.cat===state.resourceFilter;});
 if(state.resourceFilter==='Industry'&&industrySub!=='All') list=list.filter(function(r){return r.sub===industrySub;});
 var subnav=state.resourceFilter==='Industry'?'<div class="industry-subsections"><span class="section-label">Industry sub-sections</span><div class="subfilters">'+subs.map(function(s){return '<button class="chip '+(s===industrySub?'active':'')+'" data-industry="'+s+'">'+s+'</button>';}).join('')+'</div></div>':'';
 return head('CURATED KNOWLEDGE','Resource Library','Trusted templates, guides and reference material for company-building.','<button class="btn ghost" data-action="suggest-resource">Can’t find it?</button>')+'<div class="filters">'+cats.map(function(c){return '<button class="chip '+(c===state.resourceFilter?'active':'')+'" data-filter="'+c+'">'+c+'</button>';}).join('')+'</div>'+subnav+'<div class="grid cols-3">'+list.map(industryResourceCard).join('')+'</div>';
}
function updatesPage(){
 var cards=sectorUpdates.map(function(u){return '<article class="card update-card"><div class="update-meta"><span class="tag">'+u.type.toUpperCase()+'</span><time>'+u.date+'</time></div><h2>'+u.title+'</h2><p>'+u.summary+'</p><div class="update-foot"><span>Source: '+u.source+'</span><span>Visible until '+u.expires+'</span><button class="text-btn" data-action="sector-detail" data-id="'+u.id+'">Read brief →</button></div></article>';}).join('');
 return head('CURATED INTELLIGENCE','Sector Updates','Short-lived, relevant signals for electric mobility and energy; curated for action, not noise.','<button class="btn ghost" data-action="update-settings">Update preferences</button>')+'<div class="updates-layout"><section class="updates-feed">'+cards+'</section><aside class="card update-policy"><span class="eyebrow">CURATION POLICY</span><h2>Useful by design</h2><p>Updates are manually approved, tagged to a sector and automatically expire.</p><ul><li>No general news feed</li><li>No investment-performance data</li><li>No DealScreener dependency</li><li>Admin can publish or withdraw</li></ul></aside></div>';
}
var adminTab='Approvals';
function adminPage(){
 var tabs=['Approvals','Company mapping','Request routing','Publishing'], body='';
 if(adminTab==='Approvals') body='<div class="data-table"><div class="data-row head"><span>User / company</span><span>Access</span><span>Status</span><span>Action</span></div><div class="data-row"><span>Neha Rao<br><small>Exponent Energy</small></span><span>Founder team</span><span class="status review">Awaiting approval</span><button class="btn primary" data-action="approve-user">Approve</button></div><div class="data-row"><span>Rahul Menon<br><small>Exponent Energy</small></span><span>Finance leader</span><span class="status progress">Invited</span><button class="btn ghost">Resend</button></div></div>';
 if(adminTab==='Company mapping') body='<div class="detail-grid"><div><small>Portfolio company</small><strong>Exponent Energy</strong></div><div><small>Stage</small><strong>Series B</strong></div><div><small>Relationship partner</small><strong>Venkat R.</strong></div><div><small>Current analyst</small><strong>Shikhar Mehta</strong></div><div><small>Support owner</small><strong>Aman Verma</strong></div><div><small>Effective since</small><strong>01 Sep 2026</strong></div></div><div class="notice">Every reassignment is effective-dated and retained in history.</div>';
 if(adminTab==='Request routing') body='<div class="data-table"><div class="data-row head"><span>Category</span><span>Primary route</span><span>Fallback</span><span>SLA</span></div><div class="data-row"><span>Introduction</span><span>Network team</span><span>Aman Verma</span><span>2 days</span></div><div class="data-row"><span>Legal / compliance</span><span>Specialist team</span><span>Shikhar Mehta</span><span>1 day</span></div><div class="data-row"><span>Fundraising</span><span>Investment team</span><span>Venkat R.</span><span>1 day</span></div></div>';
 if(adminTab==='Publishing') body='<div class="data-table"><div class="data-row head"><span>Content</span><span>Visibility</span><span>Version</span><span>State</span></div><div class="data-row"><span>MIS Reporting Template</span><span>Portfolio-wide</span><span>v3.2</span><span class="status resolved">Published</span></div><div class="data-row"><span>EV Financing Ecosystem</span><span>Exponent Energy</span><span>Sep 2026</span><span class="status resolved">Published</span></div></div>';
 return head('INTERNAL CONTROL PLANE','Admin workspace','A role-protected demonstration of access, ownership, routing and publishing.','<button class="btn primary" data-action="invite-user">Invite company user</button>')+'<div class="detail-banner">'+svg('shield')+'<span><strong>Internal YourNest view</strong><small>Founders cannot access this workspace in production. It is visible here only for stakeholder demonstration.</small></span></div><div class="admin-grid"><aside class="card">'+tabs.map(function(t){return '<button class="network-tab '+(t===adminTab?'active':'')+'" data-admin="'+t+'">'+t+'</button>';}).join('')+'</aside><section class="card"><div class="section-title"><h2>'+adminTab+'</h2><button class="btn ghost" data-action="admin-add">+ Add</button></div>'+body+'</section></div>';
}
pages.updates=updatesPage;
pages.admin=adminPage;
pages.resources=industryResourcesPage;
document.addEventListener('click',function(e){
 var el=e.target.closest('[data-admin],[data-industry],[data-action="sector-detail"],[data-action="update-settings"],[data-action="approve-user"],[data-action="invite-user"],[data-action="admin-add"]');
 if(!el)return;
 if(el.dataset.admin){adminTab=el.dataset.admin;render('admin');return;}
 if(el.dataset.industry){industrySub=el.dataset.industry;render('resources');return;}
 if(el.dataset.action==='sector-detail'){var u=sectorUpdates.find(function(x){return x.id==el.dataset.id;});modal(u.title,'<span class="tag">'+u.type.toUpperCase()+'</span><p>'+u.summary+'</p><div class="notice"><strong>Source:</strong> '+u.source+' · This brief expires '+u.expires+'.</div>','Mark as read',function(){toast('Sector update marked as read');});}
 if(el.dataset.action==='update-settings')toast('Sector-update preferences saved');
 if(el.dataset.action==='approve-user'){el.closest('.data-row').querySelector('.status').textContent='Approved';toast('Company user approved');}
 if(el.dataset.action==='invite-user')modal('Invite company user','<label>Company<input value="Exponent Energy" readonly></label><label>Email address<input type="email" required placeholder="name@company.com"></label><label>Access role<select><option>Founder</option><option>Finance leader</option><option>HR leader</option><option>Company team member</option></select></label>','Send invitation',function(){toast('Invitation queued for administrator review');});
 if(el.dataset.action==='admin-add')toast('Admin create flow demonstrated');
});
