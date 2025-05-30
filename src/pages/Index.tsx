
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Zap, FileText, Search, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Briefcase className="h-12 w-12 text-blue-600 mr-3" />
            <span className="text-4xl font-bold text-gray-900">JobPilot AI</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your AI-Powered Job Search Assistant
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your job search with AI. Create tailored resumes, find perfect opportunities, 
            and automate applications - all powered by cutting-edge artificial intelligence.
          </p>
          <Link to="/">
            <Button size="lg" className="text-lg px-8 py-4">
              Get Started Free
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>AI Resume Builder</CardTitle>
              <CardDescription>
                Create ATS-optimized resumes tailored to specific job postings
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Search className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Smart Job Discovery</CardTitle>
              <CardDescription>
                Find relevant opportunities across multiple job boards automatically
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <CardTitle>Auto Apply</CardTitle>
              <CardDescription>
                Automatically apply to jobs with personalized cover letters
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Target className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle>Match Scoring</CardTitle>
              <CardDescription>
                Get compatibility scores for jobs based on your profile
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Application Tracking</CardTitle>
              <CardDescription>
                Track all your applications and responses in one place
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Briefcase className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <CardTitle>Career Analytics</CardTitle>
              <CardDescription>
                Get insights on your job search performance and trends
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of professionals who've landed their dream jobs with JobPilot AI
          </p>
          <Link to="/">
            <Button size="lg" className="text-lg px-8 py-4">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
