var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>ScholarGate | Secure Access</title>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: "\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .editorial-shadow {\n            box-shadow: 0 20px 40px -10px rgba(25, 28, 29, 0.06);\n        }\n        .bg-glass {\n            backdrop-filter: blur(24px);\n        }\n        .btn-gradient {\n            background: linear-gradient(135deg, #004590 0%, #265dad 100%);\n        }\n        input[type=\"radio\"]:checked + label {\n            background-color: #ffffff;\n            color: #004590;\n            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n        }\n    " }} />
        <main className="flex-grow flex flex-col lg:flex-row items-center justify-center p-6 lg:p-12 gap-12 max-w-[1440px] mx-auto w-full">
          <section className="w-full lg:w-1/2 flex flex-col space-y-8 max-w-md lg:max-w-xl">
            <header className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary" style={{fontVariationSettings: '"FILL" 1'}}>school</span>
                </div>
                <span className="text-2xl font-headline font-extrabold tracking-tight text-primary">FOKELGate</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-headline font-extrabold text-on-surface tracking-tight leading-tight">
                The Archive of <br /><span className="text-primary-container">Academic Excellence</span>
              </h1>
              <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
                Join the curated platform for institutional data management. Secure, precise, and designed for the modern scholar.
              </p>
            </header>
            <div className="hidden lg:grid grid-cols-2 gap-4 mt-8">
              <div className="p-6 bg-surface-container-low rounded-xl space-y-2">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: '"FILL" 1'}}>security</span>
                <h3 className="font-headline font-bold text-on-surface">Verified Access</h3>
                <p className="text-sm text-on-surface-variant">Encrypted entry for authorized student profiles.</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-xl space-y-2">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: '"FILL" 1'}}>analytics</span>
                <h3 className="font-headline font-bold text-on-surface">Data Precision</h3>
                <p className="text-sm text-on-surface-variant">Validated entry fields for academic records.</p>
              </div>
            </div>
          </section>
          <section className="w-full lg:w-1/2 flex justify-center">
            <div className="bg-surface-container-lowest editorial-shadow rounded-xl w-full max-w-lg p-8 lg:p-10 border border-outline-variant/10">
              <div className="flex bg-surface-container-low p-1.5 rounded-full mb-8">
                <button className="flex-1 py-2 px-6 rounded-full text-sm font-semibold transition-all text-on-surface-variant" id="login-tab">Log In</button>
                <button className="flex-1 py-2 px-6 rounded-full text-sm font-semibold transition-all bg-surface-container-lowest text-primary shadow-sm" id="register-tab">Register</button>
              </div>
              <div className="space-y-6 hidden" id="login-section">
                <div className="space-y-2">
                  <h2 className="text-2xl font-headline font-bold text-on-surface">Welcome Back</h2>
                  <p className="text-sm text-on-surface-variant">Please enter your credentials to access the dashboard.</p>
                </div>
                <form className="space-y-4"><div className="flex bg-surface-container-low p-1 rounded-xl mb-4">
                    <div className="flex-1">
                      <input defaultChecked className="hidden" id="login-account-student" name="login-account-type" type="radio" defaultValue="student" />
                      <label className="block text-center py-2 text-xs font-semibold rounded-lg cursor-pointer transition-all text-on-surface-variant hover:text-on-surface" htmlFor="login-account-student">Student</label>
                    </div>
                    <div className="flex-1">
                      <input className="hidden" id="login-account-teacher" name="login-account-type" type="radio" defaultValue="teacher" />
                      <label className="block text-center py-2 text-xs font-semibold rounded-lg cursor-pointer transition-all text-on-surface-variant hover:text-on-surface" htmlFor="login-account-teacher">Teacher</label>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-label font-semibold text-on-surface-variant px-1" htmlFor="login-email">School Email</label>
                    <input className="w-full px-4 py-3 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline/50" id="login-email" placeholder="student@university.edu" type="email" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-label font-semibold text-on-surface-variant px-1" htmlFor="login-pass">Password</label>
                    <input className="w-full px-4 py-3 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline/50" id="login-pass" placeholder="••••••••" type="password" />
                  </div>
                  <div className="flex items-center justify-between px-1">
                    <label className="flex items-center text-xs text-on-surface-variant cursor-pointer group">
                      <input className="rounded border-outline-variant text-primary focus:ring-primary mr-2" type="checkbox" />
                      <span className="group-hover:text-on-surface transition-colors">Remember device</span>
                    </label>
                    <a className="text-xs font-semibold text-primary hover:underline" href="#">Forgot password?</a>
                  </div>
                  <button className="w-full btn-gradient text-on-primary py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all mt-4" type="submit">
                    Log Into ScholarGate
                  </button>
                </form>
              </div>
              <div className="space-y-6" id="register-section">
                <div className="space-y-2">
                  <h2 className="text-2xl font-headline font-bold text-on-surface" id="register-title">Create Student Account</h2>
                  <p className="text-sm text-on-surface-variant">Register your institutional identity for portal access.</p>
                </div>
                <div className="flex bg-surface-container-low p-1 rounded-xl mb-4">
                  <div className="flex-1">
                    <input defaultChecked className="hidden" id="account-student" name="account-type" type="radio" defaultValue="student" />
                    <label className="block text-center py-2 text-xs font-semibold rounded-lg cursor-pointer transition-all text-on-surface-variant hover:text-on-surface" htmlFor="account-student">Student</label>
                  </div>
                  <div className="flex-1">
                    <input className="hidden" id="account-teacher" name="account-type" type="radio" defaultValue="teacher" />
                    <label className="block text-center py-2 text-xs font-semibold rounded-lg cursor-pointer transition-all text-on-surface-variant hover:text-on-surface" htmlFor="account-teacher">Teacher</label>
                  </div>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-label font-semibold text-on-surface-variant px-1" htmlFor="reg-first">First Name</label>
                      <input className="w-full px-4 py-2.5 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface" id="reg-first" type="text" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-label font-semibold text-on-surface-variant px-1" htmlFor="reg-middle">Middle Name</label>
                      <input className="w-full px-4 py-2.5 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface" id="reg-middle" type="text" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-label font-semibold text-on-surface-variant px-1" htmlFor="reg-last">Last Name</label>
                      <input className="w-full px-4 py-2.5 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface" id="reg-last" type="text" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-label font-semibold text-on-surface-variant px-1" htmlFor="reg-email">School Email</label>
                      <input className="w-full px-4 py-2.5 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline/40" id="reg-email" placeholder="name@edu.com" type="email" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-label font-semibold text-on-surface-variant px-1" htmlFor="reg-id" id="id-label">Student ID Number</label>
                      <input className="w-full px-4 py-2.5 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline/40" id="reg-id" placeholder="00-000-00" type="text" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-1.5" id="teacher-field-container">
                      <label className="text-xs font-label font-semibold text-on-surface-variant px-1" htmlFor="reg-dynamic" id="dynamic-label">Teacher Name</label>
                      <input className="w-full px-4 py-2.5 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline/40" id="reg-dynamic" placeholder="Dr. Smith" type="text" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-label font-semibold text-on-surface-variant px-1" htmlFor="reg-time">Class Time</label>
                      <input className="w-full px-4 py-2.5 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline/40" id="reg-time" placeholder="10:30 AM - 12:00 PM" type="text" />
                    </div>
                  </div>
                  <div className="space-y-3 pt-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-label font-semibold text-on-surface-variant px-1" htmlFor="reg-pass">Password</label>
                      <input className="w-full px-4 py-2.5 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface" id="reg-pass" placeholder="••••••••" type="password" />
                      <div className="bg-primary-fixed/30 p-3 rounded-lg flex items-start gap-2 mt-2">
                        <span className="material-symbols-outlined text-on-primary-fixed-variant text-[16px] mt-0.5">info</span>
                        <p className="text-[10px] leading-tight text-on-primary-fixed-variant font-medium">
                          Security requirement: Minimum 8 characters, at least one uppercase letter, one numerical digit, and one special character.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-label font-semibold text-on-surface-variant px-1" htmlFor="reg-confirm">Confirm Password</label>
                      <input className="w-full px-4 py-2.5 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface" id="reg-confirm" placeholder="••••••••" type="password" />
                    </div>
                  </div>
                  <button className="w-full btn-gradient text-on-primary py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all mt-4" type="submit">
                    Complete Registration
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-slate-100 dark:bg-slate-950 flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 gap-4 border-t border-slate-200/50 dark:border-slate-800/50 mt-auto">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 font-headline">FOKELGate</span>
            <span className="text-slate-400">|</span>
            <span className="font-inter text-xs tracking-wide uppercase text-slate-600 dark:text-slate-400">© 2026 FOKEL Academic Systems. All rights reserved.</span>
          </div>
          <nav className="flex gap-8">
            <a className="font-inter text-xs tracking-wide uppercase text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all hover:underline focus:outline-none ring-2 ring-blue-500" href="#">Privacy Policy</a>
            <a className="font-inter text-xs tracking-wide uppercase text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all hover:underline focus:outline-none ring-2 ring-blue-500" href="#">Terms of Service</a>
            <a className="font-inter text-xs tracking-wide uppercase text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all hover:underline focus:outline-none ring-2 ring-blue-500" href="#">Security Audit</a>
            <a className="font-inter text-xs tracking-wide uppercase text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all hover:underline focus:outline-none ring-2 ring-blue-500" href="#">Contact Support</a>
          </nav>
        </footer>
      </div>
    );
  }
});