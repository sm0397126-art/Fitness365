import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
import { Plus, Trash2, Edit2, Check, X, LogIn, LogOut, ChevronRight, Users, Dumbbell, Image as ImageIcon, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

type Tab = 'programs' | 'gallery' | 'inquiries';

export default function Admin() {
  const { user, profile, loading, isAdmin, login, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>('programs');
  const [programs, setPrograms] = useState<any[]>([]);
  const [gallery, setGallery] = useState<any[]>([]);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form states
  const [programForm, setProgramForm] = useState({ title: '', description: '', image: '', category: 'Strength', features: '' });
  const [galleryForm, setGalleryForm] = useState({ src: '', alt: '', category: 'facility' });

  useEffect(() => {
    if (!isAdmin) return;

    const unsubPrograms = onSnapshot(query(collection(db, 'programs')), (snapshot) => {
      setPrograms(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }, (err) => handleFirestoreError(err, OperationType.LIST, 'programs'));

    const unsubGallery = onSnapshot(query(collection(db, 'gallery')), (snapshot) => {
      setGallery(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }, (err) => handleFirestoreError(err, OperationType.LIST, 'gallery'));

    const unsubInquiries = onSnapshot(query(collection(db, 'inquiries'), orderBy('createdAt', 'desc')), (snapshot) => {
      setInquiries(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }, (err) => handleFirestoreError(err, OperationType.LIST, 'inquiries'));

    return () => {
      unsubPrograms();
      unsubGallery();
      unsubInquiries();
    };
  }, [isAdmin]);

  const handleAddProgram = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = {
        ...programForm,
        features: programForm.features.split(',').map(f => f.trim())
      };
      if (editingId) {
        await updateDoc(doc(db, 'programs', editingId), data);
      } else {
        await addDoc(collection(db, 'programs'), data);
      }
      setIsAdding(false);
      setEditingId(null);
      setProgramForm({ title: '', description: '', image: '', category: 'Strength', features: '' });
    } catch (err) {
      handleFirestoreError(err, editingId ? OperationType.UPDATE : OperationType.CREATE, 'programs');
    }
  };

  const handleAddGallery = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateDoc(doc(db, 'gallery', editingId), galleryForm);
      } else {
        await addDoc(collection(db, 'gallery'), galleryForm);
      }
      setIsAdding(false);
      setEditingId(null);
      setGalleryForm({ src: '', alt: '', category: 'facility' });
    } catch (err) {
      handleFirestoreError(err, editingId ? OperationType.UPDATE : OperationType.CREATE, 'gallery');
    }
  };

  const handleDelete = async (col: string, id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    try {
      await deleteDoc(doc(db, col, id));
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, col);
    }
  };

  const handleUpdateInquiryStatus = async (id: string, status: string) => {
    try {
      await updateDoc(doc(db, 'inquiries', id), { status });
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, 'inquiries');
    }
  };

  if (loading) return <div className="min-h-screen bg-dark flex items-center justify-center text-white">Loading...</div>;

  if (!user) {
    return (
      <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-dark-card p-12 border border-white/5 text-center"
        >
          <Dumbbell className="mx-auto text-primary mb-8" size={48} />
          <h1 className="text-4xl font-display font-bold text-white mb-4 uppercase tracking-tighter">Admin Portal</h1>
          <p className="text-gray-500 mb-12 font-light">Access restricted to authorized personnel only.</p>
          <button 
            onClick={login}
            className="w-full bg-primary text-white py-4 rounded-sm font-display font-bold uppercase tracking-ultra text-xs flex items-center justify-center gap-3 hover:bg-primary-hover transition-all"
          >
            <LogIn size={18} /> Sign In with Google
          </button>
        </motion.div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-dark-card p-12 border border-white/5 text-center">
          <X className="mx-auto text-primary mb-8" size={48} />
          <h1 className="text-4xl font-display font-bold text-white mb-4 uppercase tracking-tighter">Access Denied</h1>
          <p className="text-gray-500 mb-12 font-light">Your account does not have administrator privileges.</p>
          <button 
            onClick={logout}
            className="w-full bg-white/5 text-white py-4 rounded-sm font-display font-bold uppercase tracking-ultra text-xs hover:bg-white/10 transition-all"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-dark min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div>
            <span className="text-primary font-bold text-[10px] uppercase tracking-ultra mb-4 block">Control Panel</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white uppercase tracking-tighter leading-[0.8]">
              ADMIN <br />
              <span className="serif-italic text-primary lowercase tracking-normal">dashboard</span>
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-white text-xs font-bold uppercase tracking-widest">{profile?.displayName}</p>
              <p className="text-gray-500 text-[10px] uppercase tracking-ultra">{profile?.email}</p>
            </div>
            <button 
              onClick={logout}
              className="p-4 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all rounded-sm"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {/* Sidebar */}
          <div className="bg-dark p-8 space-y-2">
            {[
              { id: 'programs', label: 'Programs', icon: Dumbbell },
              { id: 'gallery', label: 'Gallery', icon: ImageIcon },
              { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id as Tab); setIsAdding(false); setEditingId(null); }}
                className={cn(
                  "w-full flex items-center justify-between p-4 text-[10px] font-bold uppercase tracking-ultra transition-all",
                  activeTab === tab.id ? "bg-primary text-white" : "text-gray-500 hover:text-white hover:bg-white/5"
                )}
              >
                <div className="flex items-center gap-3">
                  <tab.icon size={16} />
                  {tab.label}
                </div>
                <ChevronRight size={14} />
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3 bg-dark p-8 md:p-12">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tighter">{activeTab}</h2>
              {activeTab !== 'inquiries' && (
                <button 
                  onClick={() => setIsAdding(!isAdding)}
                  className="bg-primary text-white px-6 py-3 rounded-sm font-display font-bold uppercase tracking-ultra text-[10px] flex items-center gap-2 hover:translate-y-[-2px] transition-all"
                >
                  {isAdding ? <X size={16} /> : <Plus size={16} />}
                  {isAdding ? 'Cancel' : `Add ${activeTab.slice(0, -1)}`}
                </button>
              )}
            </div>

            <AnimatePresence mode="wait">
              {isAdding || editingId ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-darker p-8 border border-white/5 mb-12"
                >
                  {activeTab === 'programs' ? (
                    <form onSubmit={handleAddProgram} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-ultra">Title</label>
                          <input 
                            value={programForm.title}
                            onChange={e => setProgramForm({...programForm, title: e.target.value})}
                            className="w-full bg-dark border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary text-sm font-light" 
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-ultra">Category</label>
                          <input 
                            value={programForm.category}
                            onChange={e => setProgramForm({...programForm, category: e.target.value})}
                            className="w-full bg-dark border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary text-sm font-light" 
                            required 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-ultra">Image URL</label>
                        <input 
                          value={programForm.image}
                          onChange={e => setProgramForm({...programForm, image: e.target.value})}
                          className="w-full bg-dark border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary text-sm font-light" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-ultra">Features (comma separated)</label>
                        <input 
                          value={programForm.features}
                          onChange={e => setProgramForm({...programForm, features: e.target.value})}
                          className="w-full bg-dark border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary text-sm font-light" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-ultra">Description</label>
                        <textarea 
                          value={programForm.description}
                          onChange={e => setProgramForm({...programForm, description: e.target.value})}
                          rows={4}
                          className="w-full bg-dark border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary text-sm font-light resize-none" 
                          required 
                        />
                      </div>
                      <button type="submit" className="bg-primary text-white px-12 py-4 rounded-sm font-display font-bold uppercase tracking-ultra text-xs">
                        {editingId ? 'Update' : 'Save'} Program
                      </button>
                    </form>
                  ) : (
                    <form onSubmit={handleAddGallery} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-ultra">Image URL</label>
                          <input 
                            value={galleryForm.src}
                            onChange={e => setGalleryForm({...galleryForm, src: e.target.value})}
                            className="w-full bg-dark border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary text-sm font-light" 
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-ultra">Category</label>
                          <select 
                            value={galleryForm.category}
                            onChange={e => setGalleryForm({...galleryForm, category: e.target.value})}
                            className="w-full bg-dark border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary text-sm font-light uppercase"
                          >
                            <option value="facility">Facility</option>
                            <option value="equipment">Equipment</option>
                            <option value="classes">Classes</option>
                            <option value="transformations">Transformations</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-ultra">Alt Text</label>
                        <input 
                          value={galleryForm.alt}
                          onChange={e => setGalleryForm({...galleryForm, alt: e.target.value})}
                          className="w-full bg-dark border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary text-sm font-light" 
                          required 
                        />
                      </div>
                      <button type="submit" className="bg-primary text-white px-12 py-4 rounded-sm font-display font-bold uppercase tracking-ultra text-xs">
                        {editingId ? 'Update' : 'Save'} Image
                      </button>
                    </form>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {activeTab === 'programs' && programs.map(p => (
                    <div key={p.id} className="flex items-center justify-between p-6 bg-darker border border-white/5 group hover:border-primary/30 transition-all">
                      <div className="flex items-center gap-6">
                        <img src={p.image} className="w-16 h-16 object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                        <div>
                          <h4 className="text-white font-bold text-sm uppercase tracking-widest">{p.title}</h4>
                          <p className="text-gray-500 text-[10px] uppercase tracking-ultra">{p.category}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button 
                          onClick={() => { setEditingId(p.id); setProgramForm({ ...p, features: p.features.join(', ') }); }}
                          className="p-3 text-gray-500 hover:text-white hover:bg-white/5 transition-all"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button 
                          onClick={() => handleDelete('programs', p.id)}
                          className="p-3 text-gray-500 hover:text-primary hover:bg-primary/5 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}

                  {activeTab === 'gallery' && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {gallery.map(img => (
                        <div key={img.id} className="relative aspect-square group overflow-hidden">
                          <img src={img.src} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                          <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-4">
                            <button 
                              onClick={() => { setEditingId(img.id); setGalleryForm(img); }}
                              className="p-3 text-white hover:bg-primary transition-all"
                            >
                              <Edit2 size={16} />
                            </button>
                            <button 
                              onClick={() => handleDelete('gallery', img.id)}
                              className="p-3 text-white hover:bg-primary transition-all"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'inquiries' && inquiries.map(inq => (
                    <div key={inq.id} className="p-8 bg-darker border border-white/5 space-y-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-white font-bold text-lg uppercase tracking-tighter">{inq.firstName} {inq.lastName}</h4>
                          <p className="text-primary text-[10px] font-bold uppercase tracking-ultra">{inq.goal}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-500 text-[10px] uppercase tracking-ultra">
                            {inq.createdAt instanceof Timestamp ? inq.createdAt.toDate().toLocaleString() : 'N/A'}
                          </p>
                          <select 
                            value={inq.status}
                            onChange={(e) => handleUpdateInquiryStatus(inq.id, e.target.value)}
                            className={cn(
                              "mt-2 bg-dark border border-white/10 text-[10px] font-bold uppercase tracking-ultra px-3 py-1 rounded-sm",
                              inq.status === 'pending' ? "text-yellow-500" : inq.status === 'contacted' ? "text-blue-500" : "text-green-500"
                            )}
                          >
                            <option value="pending">Pending</option>
                            <option value="contacted">Contacted</option>
                            <option value="resolved">Resolved</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-8 text-xs font-light tracking-widest text-gray-400">
                        <p><span className="text-gray-600 uppercase text-[10px] font-bold mr-2">Email:</span> {inq.email}</p>
                        <p><span className="text-gray-600 uppercase text-[10px] font-bold mr-2">Phone:</span> {inq.phone}</p>
                      </div>
                      <p className="text-gray-300 text-sm font-light leading-relaxed border-t border-white/5 pt-4">{inq.message}</p>
                      <button 
                        onClick={() => handleDelete('inquiries', inq.id)}
                        className="text-[10px] font-bold text-gray-600 hover:text-primary uppercase tracking-ultra flex items-center gap-2"
                      >
                        <Trash2 size={12} /> Delete Inquiry
                      </button>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
