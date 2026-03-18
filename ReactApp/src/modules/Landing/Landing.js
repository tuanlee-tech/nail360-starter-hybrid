import React from 'react';
import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Layers, 
  FileText, 
  BookOpen, 
  Github, 
  Smartphone,
  Layout,
  Code2,
  Box,
  Component,
  Database,
  Globe,
  RefreshCw,
  Terminal,
  Settings2,
  Server,
  Network,
  GitBranch,
  Key,
  ArrowRight,
  Workflow,
  FolderTree,
  FileCode,
  FolderOpen,
  ChevronRight,
  Activity,
  UserCheck,
  ShieldAlert
} from 'lucide-react';

const Landing = () => {
  return (
    <div className="bg-slate-900 min-h-screen font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      
      {/* 🌌 Hero Area: Dark Mode Elegance */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-2xl backdrop-blur-md">
              Hybrid Island Design System
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8 italic">
              ARCHITECTURAL <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient-x underline decoration-white/10 decoration-8 underline-offset-8">EXPLORER</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto mb-12 leading-relaxed italic">
              Hệ thống vận hành đa tầng: Giao điểm của <strong>PHP Server</strong> và <strong>React Modern</strong>. 
              Tối ưu hóa khả năng bảo trì và mở rộng cho team nội bộ.
            </p>
          </div>

          {/* 📊 The Blueprint: Interactive Steps */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3.5rem] p-8 md:p-12 shadow-3xl">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4 relative z-10 text-center">
               {[
                 { icon: <Server />, title: "Request", bg: "group-hover:bg-indigo-600", shadow: "group-hover:shadow-indigo-500/50", label: "PHP Router" },
                 { icon: <Database />, title: "Model", bg: "group-hover:bg-emerald-600", shadow: "group-hover:shadow-emerald-500/50", label: "Db / Seo Helper" },
                 { icon: <Zap />, title: "Bridge", bg: "group-hover:bg-amber-600", shadow: "group-hover:shadow-amber-500/50", label: "Manifest JSON" },
                 { icon: <Cpu />, title: "Island", bg: "group-hover:bg-purple-600", shadow: "group-hover:shadow-purple-500/50", label: "React Mount" },
                 { icon: <Layout />, title: "Sync", bg: "group-hover:bg-slate-700", shadow: "group-hover:shadow-slate-500/50", label: "Zustand State" }
               ].map((node, i) => (
                 <div key={i} className="flex flex-col items-center group relative">
                    {i < 4 && (
                      <div className="hidden lg:block absolute top-10 left-[75%] w-[50%] h-[2px] bg-white/10 z-0">
                         <div className="w-full h-full bg-indigo-500/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                      </div>
                    )}
                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 bg-white/5 border border-white/10 relative z-10 shadow-xl ${node.bg} ${node.shadow} group-hover:scale-110 group-hover:-rotate-3`}>
                       {React.cloneElement(node.icon, { size: 28, className: "text-white group-hover:scale-110 transition-transform" })}
                    </div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 italic group-hover:text-indigo-400 transition-colors">Step 0{i+1}</div>
                    <h4 className="font-black text-white text-[11px] uppercase tracking-tighter mb-1">{node.title}</h4>
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-tight opacity-0 group-hover:opacity-100 transition-opacity leading-none italic">{node.label}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔄 The "Build-to-Load" Workflow Sequence */}
      <section className="py-24 bg-slate-900 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/3">
                 <div className="text-amber-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4 italic leading-none">Automated Pipeline</div>
                 <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none mb-6">Build-to-Load <br/>Workflow</h2>
                 <p className="text-slate-500 text-sm font-medium italic leading-relaxed">
                    Cơ chế tự động hóa từ khi lập trình viên gõ lệnh build cho đến khi người dùng cuối nhìn thấy UI đã cập nhật.
                 </p>
              </div>
              <div className="md:w-2/3 flex flex-col space-y-4">
                 {[
                   { step: "01", icon: <Terminal />, title: "NPM Build Dispatch", desc: "Webpack đóng gói React source, tạo ra các chunk tệp tin kèm mã SHA-hash định danh." },
                   { step: "02", icon: <FileCode />, title: "Manifest Generation", desc: "Tệp manifest.json lưu trữ ánh xạ vĩnh viễn giữa tên entry (ví dụ: 'SalonDetail') và hash thực tế." },
                   { step: "03", icon: <Server />, title: "PHP Asset Read", desc: "ReactLoader.php đọc manifest một lần duy nhất, lấy chính xác đường dẫn tệp mới nhất để nhúng vào HTML." },
                   { step: "04", icon: <Zap />, title: "Island Hydration", desc: "HTML Shell tải xuống, React tìm đúng div ID để kích hoạt các hòn đảo giao diện sống động." }
                 ].map((flow, idx) => (
                   <div key={idx} className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all group">
                      <div className="text-xl font-black text-white/20 italic group-hover:text-amber-500 transition-colors">{flow.step}</div>
                      <div className="p-3 bg-white/5 rounded-2xl text-amber-500 group-hover:scale-110 transition-transform">{flow.icon}</div>
                      <div>
                         <h5 className="font-black text-white text-xs uppercase tracking-widest mb-1 italic">{flow.title}</h5>
                         <p className="text-[10px] text-slate-500 font-bold leading-normal">{flow.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 🛡️ Stability & Resilience Tenets (Error Boundary & Session) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="text-center mb-16">
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none mb-4">Core Resilience</h3>
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest italic">Tính ổn định và khả năng phục hồi của hệ thống</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Error Boundary Tenet */}
              <div className="p-10 bg-slate-50 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                 <div className="flex items-start justify-between mb-8">
                    <div className="p-4 bg-rose-50 text-rose-600 rounded-3xl group-hover:bg-rose-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                       <ShieldAlert size={32} />
                    </div>
                    <div className="text-[10px] font-black text-rose-300 uppercase tracking-widest pt-2">Safety Wall</div>
                 </div>
                 <h4 className="text-2xl font-black text-slate-900 mb-4 italic uppercase tracking-tighter leading-none">Error Isolation Engine</h4>
                 <p className="text-slate-500 text-sm font-medium italic leading-relaxed mb-8">
                    Cơ chế <strong>Error Boundary</strong> bao bọc từng Island (Hòn đảo). Nếu Island "Salon Detail" bị lỗi logic, các hòn đảo khác (Booking, Chat) và toàn bộ trang PHP vẫn hoạt động bình thường. 
                    <span className="block mt-4 text-rose-600 font-bold underline decoration-2 underline-offset-4">Hệ thống sẽ không bao giờ bị Crash trắng trang.</span>
                 </p>
                 <div className="flex gap-2">
                    <div className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-widest">Isolated Runtime</div>
                    <div className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-widest">Safe Recovery</div>
                 </div>
              </div>

              {/* No Session Loss Tenet */}
              <div className="p-10 bg-indigo-600 rounded-[3.5rem] text-white shadow-2xl shadow-indigo-200 hover:rotate-1 transition-all group overflow-hidden relative">
                 <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-125 transition-transform">
                    <UserCheck size={200} />
                 </div>
                 <div className="flex items-start justify-between mb-8">
                    <div className="p-4 bg-white/20 backdrop-blur-md rounded-3xl group-hover:bg-white group-hover:text-indigo-600 transition-all transform group-hover:-rotate-6">
                       <Activity size={32} />
                    </div>
                    <div className="text-[10px] font-black text-indigo-300 uppercase tracking-widest pt-2">Zero Downtime</div>
                 </div>
                 <h4 className="text-2xl font-black mb-4 italic uppercase tracking-tighter leading-none">Persistence Stability</h4>
                 <p className="text-white/80 text-sm font-medium italic leading-relaxed mb-8">
                    Khi thực hiện lệnh Build và Deploy, chúng ta chỉ thay thế các tệp tin tĩnh (JS/CSS). <strong>Session PHP</strong> và trạng thái đăng nhập của người dùng được giữ nguyên tuyệt đối. 
                    <span className="block mt-4 text-indigo-200 font-bold underline decoration-indigo-300/50 decoration-2 underline-offset-4">Quá trình vận hành liên tục không bị gián đoạn.</span>
                 </p>
                 <div className="flex gap-2 relative z-10">
                    <div className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[9px] font-black text-white/60 uppercase tracking-widest">No Re-login Required</div>
                    <div className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[9px] font-black text-white/60 uppercase tracking-widest">Asset Swap Only</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 📂 Folder Structure: The Source Tree (Colored Section) */}
      <section className="py-24 bg-indigo-50 border-y border-indigo-100 relative">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center leading-none">
              <div className="order-2 lg:order-1">
                 <div className="text-indigo-600 font-black text-xs uppercase tracking-[0.25em] mb-4 italic">Source Mapping</div>
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none mb-8">Folder <br/>Structure</h2>
                 <p className="text-slate-500 font-medium mb-12 italic leading-relaxed">Sắp xếp khoa học, tách biệt trách nhiệm. Giúp Junior nắm bắt vị trí tệp tin chỉ trong vài giây.</p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-2xl border border-indigo-100 shadow-sm flex items-center gap-4 group">
                       <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors"><Settings2 size={18}/></div>
                       <div className="text-xs font-black text-slate-900 uppercase tracking-tighter italic">Includes/ Core Classes</div>
                    </div>
                    <div className="p-4 bg-white rounded-2xl border border-indigo-100 shadow-sm flex items-center gap-4 group">
                       <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors"><Component size={18}/></div>
                       <div className="text-xs font-black text-slate-900 uppercase tracking-tighter italic">ReactApp/ Sources</div>
                    </div>
                    <div className="p-4 bg-white rounded-2xl border border-indigo-100 shadow-sm flex items-center gap-4 group">
                       <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors"><Globe size={18}/></div>
                       <div className="text-xs font-black text-slate-900 uppercase tracking-tighter italic">Public/ Assets & Manifest</div>
                    </div>
                    <div className="p-4 bg-white rounded-2xl border border-indigo-100 shadow-sm flex items-center gap-4 group">
                       <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white"><FileCode size={18}/></div>
                       <div className="text-xs font-black text-slate-900 uppercase tracking-tighter italic">Views/ PHP Templates</div>
                    </div>
                 </div>
              </div>

              {/* Visual Tree */}
              <div className="order-1 lg:order-2 bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-2xl relative group h-[500px] overflow-y-auto custom-scrollbar">
                 <div className="flex items-center gap-2 mb-8 border-b border-white/5 pb-6">
                    <FolderTree className="text-indigo-400" size={24} />
                    <span className="text-sm font-black text-slate-300 uppercase tracking-widest">Project Root</span>
                 </div>
                 
                 <div className="space-y-4 font-mono text-[11px] font-bold">
                    <div className="flex items-center gap-2 text-indigo-300"><ChevronRight size={14}/> <FolderOpen size={16}/> includes/</div>
                    <div className="ml-8 space-y-4 text-slate-500">
                       <div className="flex items-center gap-2 space-x-2">
                          <FileCode size={14} className="text-emerald-500"/> 
                          <span>Classes/ReactLoader.php</span>
                          <span className="text-[9px] text-white/20 italic tracking-tighter">// Manifest Parser</span>
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-indigo-300"><ChevronRight size={14}/> <FolderOpen size={16}/> public/</div>
                    <div className="ml-8 space-y-4 text-slate-300">
                       <div className="flex gap-2 items-center">
                          <FolderTree size={14} className="text-amber-500" />
                          <span>assets/react/</span> 
                          <span className="text-amber-500 opacity-50 underline tracking-tighter decoration-amber-500/50 underline-offset-4 text-[9px] font-black">// Output Target</span>
                       </div>
                       <div className="flex items-center gap-2"><FileCode size={14} className="text-indigo-400"/> manifest.json <span className="text-[9px] text-indigo-400 opacity-50 font-black">// Asset Map</span></div>
                    </div>

                    <div className="flex items-center gap-2 text-indigo-300"><ChevronRight size={14}/> <FolderOpen size={16}/> ReactApp/</div>
                    <div className="ml-8 space-y-4 text-slate-500">
                       <div className="flex items-center gap-2"><FileCode size={14} className="text-purple-400"/> src/modules/</div>
                       <div className="flex items-center gap-2"><FileCode size={14} className="text-purple-400"/> src/entries/</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 🚀 Footer Area: Signature */}
      <footer className="py-20 bg-slate-900 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-8 uppercase font-black italic text-2xl tracking-tighter text-white">
               <div className="w-12 h-12 bg-indigo-600 rounded-3xl flex items-center justify-center text-white shadow-2xl rotate-3">H</div>
               Core Architecture Dashboard
            </div>
            <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 italic">
               Designed for High-Load Internal Ecosystems
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-[11px] font-black tracking-widest text-white/20 italic">
               <span>ISOLATED RUNTIME</span>
               <span>•</span>
               <span>PERSISTENT SESSION</span>
               <span>•</span>
               <span>STATIC ASSET SWAP</span>
            </div>
         </div>
      </footer>
      
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 10s ease infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(79, 70, 229, 0.3);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Landing;
