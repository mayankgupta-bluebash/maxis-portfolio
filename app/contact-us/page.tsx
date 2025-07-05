"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  TextField,
  Grid,
  Card,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const GradientText = styled(Typography)({
  background: "linear-gradient(249deg, #FFF 0%, #9573DE 53%, #FFF 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
});

const HeroBadge = styled(Box)({
  display: "inline-flex",
  padding: "6px 20px",
  borderRadius: "99px",
  border: "1px solid rgba(248, 246, 254, 0.20)",
  background: "rgba(37, 26, 73, 0.50)",
  marginBottom: "32px",
});

const ContactForm = styled(Card)({
  padding: "53px 30px",
  borderRadius: "18px",
  border: "1px solid rgba(141, 49, 245, 0.20)",
  background: "rgba(37, 26, 73, 0.50)",
  width: "644px",
  height: "623px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(37, 26, 73, 0.50)",
    border: "1px solid #3E3E3E",
    borderRadius: "4px",
    color: "#8B8698",
    fontSize: "14px",
    height: "60px",
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#8B8698",
    fontSize: "14px",
    "&.Mui-focused": {
      color: "#8B8698",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "20px 16px",
    color: "#8B8698",
    fontSize: "14px",
  },
});

const MessageTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(37, 26, 73, 0.50)",
    border: "1px solid #3E3E3E",
    borderRadius: "4px",
    color: "#8B8698",
    fontSize: "14px",
    minHeight: "132px",
    alignItems: "flex-start",
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#8C8698",
    fontSize: "14px",
    "&.Mui-focused": {
      color: "#8C8698",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "16px",
    color: "#8C8698",
    fontSize: "14px",
  },
});

const PhoneTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(37, 26, 73, 0.50)",
    border: "1px solid #3E3E3E",
    borderRadius: "4px",
    color: "#8C8799",
    fontSize: "14px",
    height: "65px",
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#8C8799",
    fontSize: "14px",
    "&.Mui-focused": {
      color: "#8C8799",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "20px 16px",
    color: "#8C8799",
    fontSize: "14px",
  },
});

const OfficeCard = styled(Card)({
  padding: "32px 64px",
  borderRadius: "9px",
  border: "1px solid #523A97",
  background: "rgba(37, 26, 73, 0.50)",
  filter: "blur(0px)",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    right: "0",
    top: "0",
    bottom: "0",
    width: "1.219px",
    background: "#523A97",
  },
  "&:last-child::after": {
    display: "none",
  },
});

const USFlag = () => (
  <img
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/637e43c7f690702c284245ba18c3fd5fb5f28c4f?width=53"
    alt="USA Flag"
    style={{ width: "27px", height: "14px", aspectRatio: "26.59/14.00" }}
  />
);

const IndiaFlag = () => (
  <img
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc4f476efbabccdf401a8153cdd0f50f44798049?width=52"
    alt="India Flag"
    style={{ width: "26px", height: "26px", aspectRatio: "1/1" }}
  />
);

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("connect@maxisit.com");
  };

  return (
    <Box sx={{ background: "#080411", minHeight: "100vh", pt: "72px" }}>
      {/* Contact Section */}
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            maxWidth: "1280px",
            mx: "auto",
          }}
        >
          {/* Left Side - Contact Info */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <HeroBadge>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "15px" }}
              >
                Contact Us
              </Typography>
            </HeroBadge>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography
                variant="h1"
                sx={{
                  color: "#FFF",
                  fontSize: "56px",
                  fontWeight: 500,
                  lineHeight: "76.8px",
                  width: "595px",
                }}
              >
                We'd love to hear from you!
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#DEDEDE",
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "36px",
                    width: "565px",
                  }}
                >
                  For General Enquiries
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <ContentCopyIcon
                    sx={{
                      color: "#FFF",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                    onClick={copyEmail}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#DEDEDE",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                    }}
                  >
                    connect@maxisit.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Right Side - Contact Form */}
          <ContactForm component="form" onSubmit={handleSubmit}>
            <Typography
              variant="h6"
              sx={{
                color: "#B7B4BF",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "20px",
                mb: 1,
              }}
            >
              BOOK A MEETING
            </Typography>

            {/* Name Fields */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <StyledTextField
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleInputChange("firstName")}
                fullWidth
                required
              />
              <StyledTextField
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleInputChange("lastName")}
                fullWidth
                required
              />
            </Box>

            {/* Email Field */}
            <StyledTextField
              placeholder="Corporate email *"
              type="email"
              value={formData.email}
              onChange={handleInputChange("email")}
              fullWidth
              required
            />

            {/* Phone Field */}
            <PhoneTextField
              placeholder="(123) 456 7890"
              value={formData.phone}
              onChange={handleInputChange("phone")}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <USFlag />
                  </InputAdornment>
                ),
              }}
            />

            {/* Message Field */}
            <MessageTextField
              placeholder="Type your message..."
              multiline
              rows={4}
              value={formData.message}
              onChange={handleInputChange("message")}
              fullWidth
            />

            {/* Privacy Policy */}
            <Typography
              variant="caption"
              sx={{
                color: "#96939F",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "17.931px",
              }}
            >
              By submiting this form, I confirm that I have read and understood
              Maxis's Privacy Policy.
            </Typography>

            {/* Submit Button */}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: "#6F41D2",
                  border: "1px solid #6F41D2",
                  borderRadius: "12px",
                  py: 2,
                  px: 4,
                  color: "white",
                  fontSize: "15px",
                  fontWeight: 500,
                  textTransform: "none",
                  "&:hover": {
                    background: "#5A2FA8",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </ContactForm>
        </Box>
      </Container>

      {/* Global Footprint Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box
          sx={{
            maxWidth: "1280px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {/* Section Header */}
          <Box sx={{ textAlign: "center" }}>
            <HeroBadge sx={{ mb: 2 }}>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "15px" }}
              >
                A Global Network
              </Typography>
            </HeroBadge>
            <Typography
              variant="h2"
              sx={{
                color: "#FFF",
                fontSize: "56px",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              Our Global Footprint
            </Typography>
          </Box>

          {/* Office Cards */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
            {/* USA Office */}
            <OfficeCard>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <USFlag />
                <Typography
                  variant="h5"
                  sx={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "23px",
                    fontWeight: 500,
                    lineHeight: "33.6px",
                  }}
                >
                  USA
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 0.5,
                  width: "392px",
                }}
              >
                <LocationOnIcon
                  sx={{ color: "#E6E6E7", fontSize: "24px", mt: 0.5 }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#E6E6E7",
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  510 Thornall Street, Suite 180, Edison, NJ 08837
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 0.5 }}>
                <PhoneIcon
                  sx={{ color: "#E6E6E7", fontSize: "24px", mt: 0.5 }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#E6E6E7",
                    fontSize: "16px",
                    lineHeight: "24px",
                    flex: 1,
                  }}
                >
                  877-MAXISIT (629-4748) Toll Free
                  <br />
                  732-494-2005 Main Office
                </Typography>
              </Box>
            </OfficeCard>

            {/* India Office */}
            <OfficeCard>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IndiaFlag />
                <Typography
                  variant="h5"
                  sx={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "23px",
                    fontWeight: 500,
                    lineHeight: "33.6px",
                  }}
                >
                  India
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 0.5,
                  width: "392px",
                }}
              >
                <LocationOnIcon
                  sx={{ color: "#E6E6E7", fontSize: "24px", mt: 0.5 }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#E6E6E7",
                    fontSize: "16px",
                    lineHeight: "24px",
                    width: "367px",
                    flexShrink: 0,
                  }}
                >
                  3rd Floor, BOSS Towers, Plot no. 102/11, 103/10 & 104/9,
                  Patrika Nagar, Madhapur, Hyderabad 500081, Telangana, India
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 0.5 }}>
                <PhoneIcon
                  sx={{ color: "#E6E6E7", fontSize: "24px", mt: 0.5 }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#E6E6E7",
                    fontSize: "16px",
                    lineHeight: "24px",
                    flex: 1,
                  }}
                >
                  91- 040- 67234678
                </Typography>
              </Box>
            </OfficeCard>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUsPage;
