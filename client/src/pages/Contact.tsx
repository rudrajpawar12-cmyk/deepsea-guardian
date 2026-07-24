/*
 * Contact Page
 * Design: Abyssal Interface - Modern contact form with office info
 */
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import {
  Mail, MapPin, Phone, Send, Globe, MessageSquare
} from "lucide-react";
import AppLayout from "@/components/AppLayout";
import { offices, faqs } from "@/data/mockData";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Message sent! We'll get back to you within 24 hours.", {
      description: "Thank you for reaching out to DeepSea Guardian.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <AppLayout>
      <div className="container pb-12">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-white/50 max-w-lg mx-auto">
            Whether you're a researcher, government agency, or conservation organization,
            we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="lg:col-span-3">
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-display font-semibold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#00D9FF]" />
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#00D9FF]/40 transition-colors"
                      placeholder="Dr. Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#00D9FF]/40 transition-colors"
                      placeholder="jane@ocean.org"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/40 mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#00D9FF]/40 transition-colors"
                    placeholder="Research collaboration inquiry"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 mb-1.5">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#00D9FF]/40 transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#14F1D9] text-[#020B16] font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Office Info */}
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="lg:col-span-2">
            <div className="space-y-4">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-white/80 mb-4 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#00D9FF]" />
                  Our Offices
                </h3>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div key={office.city} className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-4 h-4 text-[#00D9FF]" />
                        <span className="text-sm font-medium text-white">{office.city}, {office.country}</span>
                      </div>
                      <p className="text-xs text-white/40 ml-6">{office.address}</p>
                      <a href={`mailto:${office.email}`} className="text-xs text-[#00D9FF]/70 ml-6 hover:text-[#00D9FF] transition-colors">
                        {office.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social & Links */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-white/80 mb-4">Connect With Us</h3>
                <div className="space-y-3">
                  {[
                    { icon: Mail, label: "Email", value: "hello@deepseaguardian.org" },
                    { icon: Phone, label: "Phone", value: "+1 (555) 0123" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-[#00D9FF]" />
                      </div>
                      <div>
                        <p className="text-xs text-white/40">{item.label}</p>
                        <p className="text-sm text-white/80">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-white/80 mb-3">Quick FAQ</h3>
                <p className="text-xs text-white/40 mb-4">
                  Have a common question? Check our FAQ section or send us a message above.
                </p>
                <a href="/#faq" className="text-xs text-[#00D9FF] hover:text-[#14F1D9] transition-colors">
                  View all FAQs →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  );
}
