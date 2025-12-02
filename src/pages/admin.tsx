import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RedeemIcon from "@mui/icons-material/Redeem";
import SearchIcon from "@mui/icons-material/Search";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";
import Chip from "@mui/material/Chip";
import toast from "react-hot-toast";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const REWARD_TIERS = [
  { points: 15, name: "Free Es Teh", description: "Redeem 15 points for a free Es Teh" },
  { points: 30, name: "Free Pangsit", description: "Redeem 30 points for Free Pangsit (Rebus or Goreng)" },
  { points: 60, name: "Free Bakmi Jambi + Es Teh", description: "Redeem 60 points for Free Bakmi Jambi + Es Teh" },
  { points: 100, name: "Free Bakmi Jambi for 2 People", description: "Redeem 100 points for Bakmi Jambi for 2 People (Bring a Friend)" },
];

const AdminPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [spending, setSpending] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [userData, setUserData] = useState<{
    name: string;
    phone: string;
    dob: string;
    total: number;
    points: number;
  } | null>(null);
  const [selectedReward, setSelectedReward] = useState<number>(15);

  const handleSearchUser = async () => {
    if (!phoneNumber.trim()) {
      toast.error("Please enter a phone number");
      return;
    }

    setSearchLoading(true);
    setUserData(null);

    try {
      const response = await fetch("/api/points", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: phoneNumber }),
      });

      const data = await response.json();

      if (response.ok) {
        setUserData(data.data);
        toast.success(`User found: ${data.data.name}`);
      } else {
        toast.error(data.message || "User not found");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while searching");
    } finally {
      setSearchLoading(false);
    }
  };

  const handleAddPoints = async () => {
    if (!phoneNumber.trim()) {
      toast.error("Please enter a phone number");
      return;
    }

    if (!spending.trim() || parseFloat(spending) <= 0) {
      toast.error("Please enter a valid spending amount");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/admin/add-points", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          phone: phoneNumber,
          spending: parseFloat(spending)
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(`Successfully added ${data.pointsAdded} points!`, {
          duration: 4000,
          style: {
            background: "#4caf50",
            color: "#fff",
            fontWeight: "bold",
          },
        });
        setUserData(data.userData);
        setSpending("");
      } else {
        toast.error(data.message || "Failed to add points");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while adding points");
    } finally {
      setLoading(false);
    }
  };

  const handleRedeemReward = async () => {
    if (!phoneNumber.trim()) {
      toast.error("Please enter a phone number");
      return;
    }

    if (!userData) {
      toast.error("Please search for user first");
      return;
    }

    if (userData.points < selectedReward) {
      toast.error(`User needs ${selectedReward - userData.points} more points for this reward`);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/admin/redeem-reward", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          phone: phoneNumber,
          rewardPoints: selectedReward
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const reward = REWARD_TIERS.find(r => r.points === selectedReward);
        toast.success(`Successfully redeemed: ${reward?.name}!`, {
          duration: 4000,
          style: {
            background: "#d11919",
            color: "#fff",
            fontWeight: "bold",
          },
        });
        setUserData(data.userData);
      } else {
        toast.error(data.message || "Failed to redeem reward");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while redeeming reward");
    } finally {
      setLoading(false);
    }
  };

  const calculatePointsFromSpending = () => {
    if (!spending || parseFloat(spending) <= 0) return 0;
    return Math.floor(parseFloat(spending) / 10000);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", py: 4 }}>
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: "#d11919", color: "white" }}>
          <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
            <AdminPanelSettingsIcon sx={{ fontSize: 48, mr: 2 }} />
            <Typography variant="h3" component="h1" fontWeight="bold">
              Admin Panel
            </Typography>
          </Box>
          <Typography variant="body1" align="center" sx={{ opacity: 0.9 }}>
            Manage customer points, add spending, and process reward redemptions
          </Typography>
          <Alert severity="warning" sx={{ mt: 3, bgcolor: "white" }}>
            <Typography variant="body2" fontWeight="bold">
              This page is hidden from navigation. Access URL: /admin
            </Typography>
          </Alert>
        </Paper>

        <Grid container spacing={3}>
          {/* Search User Section */}
          <Grid size={{ xs: 12 }}>
            <Card elevation={2}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={3}>
                  <SearchIcon sx={{ fontSize: 32, mr: 2, color: "#d11919" }} />
                  <Typography variant="h5" fontWeight="bold">
                    Search Customer
                  </Typography>
                </Box>
                
                <Box display="flex" gap={2} alignItems="flex-start" flexDirection={{ xs: "column", sm: "row" }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    placeholder="08123456789"
                    variant="outlined"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSearchUser();
                      }
                    }}
                  />
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleSearchUser}
                    disabled={searchLoading}
                    startIcon={searchLoading ? <CircularProgress size={20} /> : <SearchIcon />}
                    sx={{
                      bgcolor: "#d11919",
                      "&:hover": { bgcolor: "#b91616" },
                      minWidth: 140,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {searchLoading ? "Searching..." : "Search"}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* User Info Display */}
          {userData && (
            <Grid size={{ xs: 12 }}>
              <Card elevation={3} sx={{ bgcolor: "#fff3e0", border: "2px solid #d11919" }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom color="#d11919">
                    Customer Information
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Name
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        {userData.name}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Phone
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        {userData.phone}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Total Spending
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        IDR {userData.total.toLocaleString()}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Current Points
                      </Typography>
                      <Chip
                        label={`${userData.points} Points`}
                        color="primary"
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          height: 40,
                          bgcolor: "#d11919",
                          mt: 0.5,
                        }}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          )}

          {/* Add Points Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={2} sx={{ height: "100%" }}>
              <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <Box display="flex" alignItems="center" mb={3}>
                  <AddCircleIcon sx={{ fontSize: 32, mr: 2, color: "#4caf50" }} />
                  <Typography variant="h5" fontWeight="bold">
                    Add Points
                  </Typography>
                </Box>

                <Alert severity="info" sx={{ mb: 3 }}>
                  <Typography variant="body2" fontWeight="bold">
                    1 point = IDR 10,000
                  </Typography>
                </Alert>

                <TextField
                  fullWidth
                  label="Spending Amount (IDR)"
                  placeholder="50000"
                  variant="outlined"
                  type="number"
                  value={spending}
                  onChange={(e) => setSpending(e.target.value)}
                  sx={{ mb: 2 }}
                  InputProps={{
                    startAdornment: <Typography sx={{ mr: 1, color: "text.secondary" }}>IDR</Typography>,
                  }}
                />

                {spending && parseFloat(spending) > 0 && (
                  <Alert severity="success" sx={{ mb: 2 }}>
                    <Typography variant="body2">
                      This will add <strong>{calculatePointsFromSpending()} points</strong>
                    </Typography>
                  </Alert>
                )}

                <Box sx={{ flexGrow: 1 }} />

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={handleAddPoints}
                  disabled={loading || !phoneNumber || !spending}
                  startIcon={loading ? <CircularProgress size={20} /> : <AddCircleIcon />}
                  sx={{
                    bgcolor: "#4caf50",
                    "&:hover": { bgcolor: "#45a049" },
                    py: 1.5,
                    fontWeight: "bold",
                  }}
                >
                  {loading ? "Adding..." : "Add Points"}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Redeem Reward Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={2} sx={{ height: "100%" }}>
              <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <Box display="flex" alignItems="center" mb={3}>
                  <RedeemIcon sx={{ fontSize: 32, mr: 2, color: "#ff9800" }} />
                  <Typography variant="h5" fontWeight="bold">
                    Redeem Reward
                  </Typography>
                </Box>

                <Alert severity="warning" sx={{ mb: 3 }}>
                  <Typography variant="body2" fontWeight="bold">
                    Points never expire and don&apos;t reset after redemption
                  </Typography>
                </Alert>

                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Select Reward</InputLabel>
                  <Select
                    value={selectedReward}
                    label="Select Reward"
                    onChange={(e) => setSelectedReward(e.target.value as number)}
                  >
                    {REWARD_TIERS.map((reward) => (
                      <MenuItem key={reward.points} value={reward.points}>
                        {reward.points} Points - {reward.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {selectedReward && (
                  <Paper sx={{ p: 2, mb: 2, bgcolor: "#f5f5f5", border: "1px solid #e0e0e0" }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Selected Reward:
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {REWARD_TIERS.find(r => r.points === selectedReward)?.name}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      {REWARD_TIERS.find(r => r.points === selectedReward)?.description}
                    </Typography>
                    <Divider sx={{ my: 1.5 }} />
                    <Typography variant="body2" fontWeight="bold" gutterBottom>
                      Required Points: {selectedReward}
                    </Typography>
                    {userData && (
                      <Typography 
                        variant="body2" 
                        color={userData.points >= selectedReward ? "success.main" : "error.main"}
                        fontWeight="bold"
                      >
                        {userData.points >= selectedReward 
                          ? `✓ Customer has enough points (${userData.points} points)`
                          : `✗ Needs ${selectedReward - userData.points} more points`
                        }
                      </Typography>
                    )}
                  </Paper>
                )}

                <Box sx={{ flexGrow: 1 }} />

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={handleRedeemReward}
                  disabled={loading || !userData || (userData && userData.points < selectedReward)}
                  startIcon={loading ? <CircularProgress size={20} /> : <RedeemIcon />}
                  sx={{
                    bgcolor: "#ff9800",
                    "&:hover": { bgcolor: "#f57c00" },
                    py: 1.5,
                    fontWeight: "bold",
                  }}
                >
                  {loading ? "Redeeming..." : "Redeem Reward"}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Reward Tiers Reference */}
          <Grid size={{ xs: 12 }}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Reward Tiers Reference
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Grid container spacing={2}>
                  {REWARD_TIERS.map((reward, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                      <Paper 
                        elevation={selectedReward === reward.points ? 3 : 1}
                        sx={{ 
                          p: 2.5, 
                          textAlign: "center",
                          border: selectedReward === reward.points ? "2px solid #d11919" : "1px solid #e0e0e0",
                          transition: "all 0.3s ease",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          "&:hover": {
                            boxShadow: 3,
                            transform: "translateY(-2px)",
                          }
                        }}
                      >
                        <Chip
                          label={`${reward.points} Points`}
                          color="primary"
                          sx={{ 
                            mb: 1.5, 
                            fontWeight: "bold",
                            bgcolor: selectedReward === reward.points ? "#d11919" : undefined,
                          }}
                        />
                        <Typography variant="body1" fontWeight="bold" gutterBottom>
                          {reward.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ mt: "auto" }}>
                          {reward.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminPage;

