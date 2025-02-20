import { useState } from "react"
import { useAuthStore } from "../store/useAuthStore";
import { MessageSquare,User, Mail, Lock, EyeOff, Eye, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";


const SignUpPage = () => {
  const [showPassword, setShowPassword]=useState(false)
  const [formData, setFormData]=useState({
    fullName:"",
    email:"",
    password:"",
  });

  const {signup, isSigningUp}=useAuthStore();

  const validateForm=()=>{
    if(!formData.fullName.trim()) return toast.error("Ajouter le nom complet");
    if (!formData.email.trim()) return toast.error("Ajouter l'adresse mail");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Le format du mail est invalide");
    if (!formData.password) return toast.error("Ajouter votre mot de passe");
    if (formData.password.length < 6) return toast.error("Votre mot de passe doit avoir aumoins 6 caracters");

    return true;
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const success = validateForm();

    if (success === true) signup(formData);
  }

  return <div className="min-h-screen grid lg: grid-cols-2">
    {/* left side*/ }
    <div className="flex flex-col justify-center items-center p-6 sm:p-12">
      <div className="w-full max-w-md space-y-8">
        {/* logo*/}
        <div className="text-center mb-8">
          <div className="flex flex-col items-center gap-2 group">
            <div
              className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
            >
              <MessageSquare className="size-6 text-primary"/>

            </div>
            <h1 className="text-2xl font-bold mt-2">Creer votre compte</h1>
            <p className="text-base-content/60">Commencer avec um compte gratuit</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Noms complet</span>
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
          </div>
          <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="votre@exemple.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Mot de passe</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full pl-10`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Creer votre Compte"
              )}
            </button>
        </form>
        <div className="text-center">
            <p className="text-base-content/60">
              Vous avez deja un compte?{" "}
              <Link to="/login" className="link link-primary">
                Se Connecter
              </Link>
            </p>
        </div>
      </div>
    </div>
     {/* right side */}

     <AuthImagePattern
        title="Rejoigner notre communaute"
        subtitle="Connectez-vous avec vos amis, partagez des moments et restez en contact avec vos proches."
      />
  </div>
  
}

export default SignUpPage;