import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Target, TrendingUp, AlertCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome back, Student</h1>
        <p className="text-slate-500 mt-2">Here is your AI-generated exam readiness report.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-none shadow-sm shadow-blue-100 bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Readiness Score</CardTitle>
            <Target className="w-4 h-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">78%</div>
            <p className="text-xs text-slate-500 mt-1">+12% from last week</p>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-sm shadow-green-100 bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Predicted Rank</CardTitle>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">Top 5%</div>
            <p className="text-xs text-slate-500 mt-1">Based on DHS Norms</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm shadow-orange-100 bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Study Streak</CardTitle>
            <Clock className="w-4 h-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">14 Days</div>
            <p className="text-xs text-slate-500 mt-1">Keep it up!</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm shadow-red-100 bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Weak Areas</CardTitle>
            <AlertCircle className="w-4 h-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">3</div>
            <p className="text-xs text-slate-500 mt-1">Require immediate revision</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm shadow-slate-200">
          <CardHeader>
            <CardTitle>AI Study Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-50/50 border border-orange-100">
              <div className="w-2 h-full bg-orange-400 rounded-full"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">Revise: Pharmacology - Cardio Drugs</h3>
                <p className="text-sm text-slate-500 mt-1">Your accuracy dropped to 45% in the last mock test.</p>
                <div className="mt-3">
                  <Progress value={45} className="h-2 bg-orange-100" />
                </div>
              </div>
              <Button variant="outline" size="sm" className="bg-white">Focus Test</Button>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50/50 border border-blue-100">
              <div className="w-2 h-full bg-blue-400 rounded-full"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">New Topic: Medical Surgical Nursing</h3>
                <p className="text-sm text-slate-500 mt-1">You are consistently scoring well. Target advanced NCLEX-style questions today.</p>
              </div>
              <Button variant="outline" size="sm" className="bg-white">Start</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm shadow-slate-200 bg-slate-900 text-white">
          <CardHeader>
            <CardTitle className="text-slate-100">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={() => navigate('/test')} className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white" size="lg">
              Take Full Mock Test
            </Button>
            <Button onClick={() => navigate('/mentor')} variant="secondary" className="w-full justify-start bg-slate-800 hover:bg-slate-700 text-slate-200" size="lg">
              Ask AI Mentor
            </Button>
            <Button variant="secondary" className="w-full justify-start bg-slate-800 hover:bg-slate-700 text-slate-200" size="lg">
              Review Mistakes (12)
            </Button>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
