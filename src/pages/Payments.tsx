import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { 
  Search, 
  Plus, 
  DollarSign, 
  CreditCard, 
  Calendar,
  User,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  Clock,
  AlertCircle,
  MoreVertical,
  Eye,
  Download,
  Send
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useToast } from '@/hooks/use-toast';

const Payments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [addPaymentOpen, setAddPaymentOpen] = useState(false);
  const { toast } = useToast();

  const payments = [
    {
      id: 1,
      student: 'Alice Johnson',
      course: 'Advanced Mathematics',
      amount: 599,
      method: 'Credit Card',
      status: 'completed',
      date: '2024-01-15',
      transactionId: 'TXN001',
      email: 'alice.johnson@email.com'
    },
    {
      id: 2,
      student: 'Bob Smith',
      course: 'Physics Fundamentals',
      amount: 499,
      method: 'PayPal',
      status: 'completed',
      date: '2024-01-20',
      transactionId: 'TXN002',
      email: 'bob.smith@email.com'
    },
    {
      id: 3,
      student: 'Carol Davis',
      course: 'Chemistry Basics',
      amount: 399,
      method: 'Bank Transfer',
      status: 'pending',
      date: '2024-01-25',
      transactionId: 'TXN003',
      email: 'carol.davis@email.com'
    },
    {
      id: 4,
      student: 'David Wilson',
      course: 'English Literature',
      amount: 449,
      method: 'Cash',
      status: 'completed',
      date: '2024-01-18',
      transactionId: 'TXN004',
      email: 'david.wilson@email.com'
    },
    {
      id: 5,
      student: 'Eva Brown',
      course: 'Computer Science Intro',
      amount: 699,
      method: 'Credit Card',
      status: 'failed',
      date: '2024-01-22',
      transactionId: 'TXN005',
      email: 'eva.brown@email.com'
    }
  ];

  const paymentStats = [
    {
      title: 'Total Revenue',
      value: '$12,450',
      change: '+18%',
      trend: 'up',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Successful Payments',
      value: '156',
      change: '+12',
      trend: 'up',
      icon: CheckCircle,
      color: 'blue'
    },
    {
      title: 'Pending Payments',
      value: '8',
      change: '-3',
      trend: 'down',
      icon: Clock,
      color: 'orange'
    },
    {
      title: 'Failed Payments',
      value: '4',
      change: '+1',
      trend: 'up',
      icon: AlertCircle,
      color: 'red'
    }
  ];

  const paymentMethodData = [
    { name: 'Credit Card', value: 45, color: '#3B82F6' },
    { name: 'PayPal', value: 25, color: '#10B981' },
    { name: 'Bank Transfer', value: 20, color: '#F59E0B' },
    { name: 'Cash', value: 10, color: '#EF4444' }
  ];

  const monthlyRevenue = [
    { month: 'Jan', amount: 8500 },
    { month: 'Feb', amount: 9200 },
    { month: 'Mar', amount: 10100 },
    { month: 'Apr', amount: 11300 },
    { month: 'May', amount: 12450 },
    { month: 'Jun', amount: 13200 }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      failed: 'bg-red-100 text-red-800',
      refunded: 'bg-gray-100 text-gray-800'
    };
    return variants[status as keyof typeof variants] || variants.pending;
  };

  const getMethodBadge = (method: string) => {
    const variants = {
      'Credit Card': 'bg-blue-100 text-blue-800',
      'PayPal': 'bg-purple-100 text-purple-800',
      'Bank Transfer': 'bg-orange-100 text-orange-800',
      'Cash': 'bg-green-100 text-green-800'
    };
    return variants[method as keyof typeof variants] || variants['Credit Card'];
  };

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || payment.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const totalRevenue = payments.reduce((sum, payment) => sum + (payment.status === 'completed' ? payment.amount : 0), 0);
  const successfulPayments = payments.filter(p => p.status === 'completed').length;
  const pendingPayments = payments.filter(p => p.status === 'pending').length;
  const failedPayments = payments.filter(p => p.status === 'failed').length;

  const handleAddPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setAddPaymentOpen(false);
    toast({
      title: "Payment recorded successfully",
      description: "The payment has been added to the system.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Payments</h1>
          <p className="text-gray-600">Track and manage student payments and transactions</p>
        </div>
        <Dialog open={addPaymentOpen} onOpenChange={setAddPaymentOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Payment
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Record New Payment</DialogTitle>
              <DialogDescription>
                Add a new payment transaction to the system.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddPayment} className="space-y-4">
              <div>
                <Label htmlFor="payment-student">Student</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select student" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alice">Alice Johnson</SelectItem>
                    <SelectItem value="bob">Bob Smith</SelectItem>
                    <SelectItem value="carol">Carol Davis</SelectItem>
                    <SelectItem value="david">David Wilson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="payment-course">Course</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="math">Advanced Mathematics</SelectItem>
                    <SelectItem value="physics">Physics Fundamentals</SelectItem>
                    <SelectItem value="chemistry">Chemistry Basics</SelectItem>
                    <SelectItem value="english">English Literature</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="payment-amount">Amount ($)</Label>
                <Input type="number" id="payment-amount" placeholder="599" min="0" step="0.01" required />
              </div>
              <div>
                <Label htmlFor="payment-method">Payment Method</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="credit-card">Credit Card</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                    <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                    <SelectItem value="cash">Cash</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="payment-date">Payment Date</Label>
                <Input type="date" id="payment-date" required />
              </div>
              <div>
                <Label htmlFor="payment-notes">Notes (Optional)</Label>
                <Textarea id="payment-notes" placeholder="Additional payment details..." />
              </div>
              <Button type="submit" className="w-full">Record Payment</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paymentStats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <div className="flex items-center mt-1">
                    {stat.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Distribution of payment methods used</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={paymentMethodData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {paymentMethodData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
            <CardDescription>Revenue trends over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search payments by student, course, or transaction ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('all')}
                size="sm"
              >
                All
              </Button>
              <Button
                variant={selectedFilter === 'completed' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('completed')}
                size="sm"
              >
                Completed
              </Button>
              <Button
                variant={selectedFilter === 'pending' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('pending')}
                size="sm"
              >
                Pending
              </Button>
              <Button
                variant={selectedFilter === 'failed' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('failed')}
                size="sm"
              >
                Failed
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payments List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
          <CardDescription>Latest payment transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredPayments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{payment.student}</p>
                    <p className="text-sm text-gray-600">{payment.course}</p>
                    <p className="text-xs text-gray-500">ID: {payment.transactionId}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium text-gray-900">${payment.amount}</p>
                    <p className="text-sm text-gray-600">{new Date(payment.date).toLocaleDateString()}</p>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-1">
                    <Badge className={getStatusBadge(payment.status)}>
                      {payment.status}
                    </Badge>
                    <Badge variant="outline" className={getMethodBadge(payment.method)}>
                      {payment.method}
                    </Badge>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="h-4 w-4 mr-2" />
                        Download Receipt
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Send className="h-4 w-4 mr-2" />
                        Send Receipt
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Empty State */}
      {filteredPayments.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No payments found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm ? 'Try adjusting your search terms' : 'Get started by recording your first payment'}
            </p>
            <Dialog open={addPaymentOpen} onOpenChange={setAddPaymentOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Payment
                </Button>
              </DialogTrigger>
            </Dialog>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Payments;