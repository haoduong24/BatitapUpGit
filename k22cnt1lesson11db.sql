USE [dvh0107]
GO
/****** Object:  Table [dbo].[dvhTaiKhoan]    Script Date: 7/1/2024 3:49:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[dvhTaiKhoan](
	[dvhId] [int] NULL,
	[dvhUserName] [nchar](50) NULL,
	[dvhPassWord] [nchar](50) NULL,
	[dvhFullName] [nchar](50) NULL,
	[dvhAge] [int] NULL,
	[dvhEmail] [nchar](50) NULL,
	[dvhPhone] [nchar](50) NULL,
	[dvhStatus] [bit] NULL
) ON [PRIMARY]
GO
INSERT [dbo].[dvhTaiKhoan] ([dvhId], [dvhUserName], [dvhPassWord], [dvhFullName], [dvhAge], [dvhEmail], [dvhPhone], [dvhStatus]) VALUES (NULL, N'DuongHao                                          ', N'123456788                                         ', N'Duong Van Haoo                                    ', 19, N'haoduong2408@gmail.com                            ', N'0377004824                                        ', 1)
GO
