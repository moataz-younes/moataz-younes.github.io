import { useState, FC } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Option A: Formspree (uncomment and add your Formspree endpoint)
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Option B: EmailJS (requires EmailJS setup - see instructions below)
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      //   from_name: formData.name,
      //   from_email: formData.email,
      //   company: formData.company,
      //   service: formData.service,
      //   message: formData.message
      // }, 'YOUR_PUBLIC_KEY');
      
      // Fallback: mailto (works without backend)
      const subject = `Contact Form: ${formData.service || 'General Inquiry'}`;
      const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Service Needed: ${formData.service || 'Not specified'}

Message:
${formData.message}`;
      
      const mailtoLink = `mailto:moataz.yones244@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-36 bg-gradient-to-b from-blue-950/20 to-black relative overflow-hidden scroll-reveal border-t border-blue-500/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Enhanced section header with better spacing */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Request Evidence <span className="text-blue-400">Review</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discuss your cyber incident and get a professional evidence review.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Fast Response, Clear Results
              </h3>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Professional cyber incident and digital evidence review for organizations and SMEs. 
                Get an assessment that helps you make informed decisions about your case, compliance, or next steps.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/20">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-300">+1 347 434 9853</p>
                  <p className="text-sm text-gray-400">Available for urgent matters</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/20">
                  <Mail className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">moataz.yones244@gmail.com</p>
                  <p className="text-sm text-gray-400">Fast response time</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/20">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-gray-300">Available Worldwide</p>
                  <p className="text-sm text-gray-400">Arabic & English proficiency</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <h4 className="text-lg md:text-xl font-semibold text-white">Contact Options</h4>
              <div className="space-y-4">
                <a
                  href="tel:+13474349853"
                  className="w-full flex items-center justify-center space-x-3 bg-green-500/10 border-2 border-green-500/40 text-green-400 py-4 md:py-5 rounded-lg hover:bg-green-500/20 transition-all duration-300 group relative overflow-hidden font-semibold text-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Phone: +1 347 434 9853</span>
                </a>
                <a
                  href="mailto:moataz.yones244@gmail.com?subject=Cyber Incident Evidence Review Inquiry"
                  className="w-full flex items-center justify-center space-x-3 bg-blue-500/10 border-2 border-blue-500/40 text-blue-400 py-4 md:py-5 rounded-lg hover:bg-blue-500/20 transition-all duration-300 group relative overflow-hidden font-semibold text-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Email: moataz.yones244@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Enhanced layout and accessibility */}
          <div className="bg-slate-800/40 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-blue-500/30 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8">
              Request Evidence Review
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2.5">
                    Name <span className="text-red-400" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full px-4 py-3.5 bg-slate-700/80 border-2 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 min-h-[48px] ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-400 focus:ring-2 focus:ring-red-500/50' 
                        : 'border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-500/50'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-400 text-sm mt-2 flex items-center gap-1.5" role="alert">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2.5">
                    Email <span className="text-red-400" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-3.5 bg-slate-700/80 border-2 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 min-h-[48px] ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-400 focus:ring-2 focus:ring-red-500/50' 
                        : 'border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-400 text-sm mt-2 flex items-center gap-1.5" role="alert">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-200 mb-2.5">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-slate-700/80 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 min-h-[48px]"
                  placeholder="Your company name (optional)"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-200 mb-2.5">
                  Type of Incident <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-slate-700/80 border-2 border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 min-h-[48px] cursor-pointer"
                >
                  <option value="">Select incident type</option>
                  <option value="data-breach">Data Breach</option>
                  <option value="ransomware">Ransomware Attack</option>
                  <option value="phishing">Phishing / Fraud</option>
                  <option value="insider-threat">Insider Threat</option>
                  <option value="other">Other Cyber Incident</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-2.5">
                  Message <span className="text-red-400" aria-label="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  rows={6}
                  className={`w-full px-4 py-3.5 bg-slate-700/80 border-2 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 resize-y min-h-[120px] ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-400 focus:ring-2 focus:ring-red-500/50' 
                      : 'border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50'
                  }`}
                  placeholder="Describe your cyber incident, what evidence you have, and what you need help with..."
                ></textarea>
                  {errors.message && (
                    <p id="message-error" className="text-red-400 text-sm mt-2 flex items-center gap-1.5" role="alert">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      {errors.message}
                    </p>
                  )}
              </div>

                  {submitStatus === 'success' && (
                <div className="bg-green-500/20 border-2 border-green-500/50 rounded-lg p-4 flex items-center gap-3 text-green-400" role="alert" aria-live="polite">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span className="font-semibold">Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border-2 border-red-500/50 rounded-lg p-4 flex items-center gap-3 text-red-400" role="alert" aria-live="assertive">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span className="font-semibold">Something went wrong. Please try again or contact us directly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-5 md:py-6 rounded-xl font-bold text-base md:text-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 flex items-center justify-center space-x-3 group shadow-2xl shadow-blue-500/50 transform hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-h-[56px] focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                aria-label={isSubmitting ? "Sending message" : "Submit evidence review request"}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin relative z-10" aria-hidden="true"></div>
                    <span className="relative z-10">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" aria-hidden="true" />
                    <span className="relative z-10">Request Evidence Review</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;